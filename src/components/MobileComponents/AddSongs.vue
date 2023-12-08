<template>
  <v-container>
    <!-- Video cards -->
   
    <transition name="fade" mode="out-in">
      <div v-if="loading" key="loading-spinner" class="loading-spinner">
        <v-progress-circular size="75" indeterminate color="green"></v-progress-circular>
      </div>
    </transition>

    <v-row v-if="!loading" class="py-3 mb-5">
      <v-col v-for="video in videos" :key="video.id.videoId" cols="12" md="4" class="mb-4">
        <v-card class="rounded">
          <v-img :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail" />
          <v-card-text>
            <div class="d-flex justify-space-between">
              <span class="headline">{{ video.snippet.title }}</span>
            </div>
            <div class="text-center mt-2">
              <v-btn :color="!isUnplayable(video) ? 'success' : 'danger'"
                :class="['mt-2', isAdded(video) ? 'btn-outline-success' : 'btn-success']" @click="validateVideo(video)"
                :disabled="video.verifying || isAdded(video)" block>
                <template v-if="video.verifying & (!isAdded(video) && !isUnplayable(video))">
                  <v-progress-circular size="25" indeterminate color="blue-grey"></v-progress-circular>
                </template>

                <template v-else>
                  <div v-if="isUnplayable(video)" style="color: white;">
                    <v-icon left>mdi-alert-circle</v-icon>
                    Cannot Be Queued
                  </div>
                  <div v-else>
                    <v-icon left>{{ !isAdded(video) ? 'mdi-playlist-music' : 'mdi-check' }}</v-icon>
                    {{ !isAdded(video) ? 'Add To Queue' : 'Song Added' }}
                  </div>
                </template>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div style="display:none;">
      <div v-if="loadVideo">
        <YoutubePlayer :playerVars="playerVars" ref="youtubePlayer" width="'100%'" :height="'100%'" :videoId="videoId"
          @onPlayerReady="videoPlayable" @onError="videoNotPlayable" />
      </div>
    </div>

    <v-snackbar :color="isVideoPlayable ? 'green' : 'red'" v-model="isModalVisible">
      <div v-if="isVideoPlayable" class="text-subtitle-1 pb-2">SUCCESS!</div>
      <div v-else class="text-subtitle-1 pb-2">FAILED!</div>

      <p>{{ snackbarMessage }}</p>

      <p v-if="isVideoPlayable">Added to Queue!</p>
      <p v-else>Video was restricted by the channel, try a different one!</p>

      <template v-slot:actions>
        <v-btn color="indigo" variant="text" @click="isModalVisible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Search box for YouTube videos -->
    <v-row class="fixed-bottom">
      <v-col cols="12" class="bg-white">
        <v-form @submit.prevent>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="9" class="d-flex align-center">

              <v-text-field v-model="searchText" :loading="loading" density="compact" variant="solo"
                placeholder="Search Youtube Karaoke" label="Search Youtube Karaoke" class="mb-2 ml-1" single-line
                hide-details @keyup.enter="searchVideos"></v-text-field>
              <v-btn size="large" color="success" @click="searchVideos" style="width: 25%;" class="ml-2 mb-2 mr-1">
                <v-icon left>mdi-magnify</v-icon> <!-- Search icon -->
                Search
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { testVideos, SOCKET_EVENTS, YOUTUBE_REQUEST_URL_BUILDER, SOCKET_URL, } from "@/constants";
import YoutubePlayer from '@/components/SessionComponents/YoutubePlayer.vue';
import io from 'socket.io-client';


export default {
  data: () => ({
    searchText: '',
    videos: testVideos,
    addedVideos: new Set(),
    loading: true,
    userName: '',
    socket: null,
    videoId: '',
    videoObj: '',
    isVerifying: false,
    playerVars: {
      autoplay: 1,  // Disable autoplay
      mute: 1,
    },
    loadVideo: true,
    isVideoPlayable: true,
    isModalVisible: false,
    verifyingVideo: false,
    snackbarMessage: '',
    unplayableVideos: new Set(),
  }),
  components: {
    YoutubePlayer
  },
  mounted() {
    if (!localStorage.getItem('userName')) {
      this.$router.push('/')
      return alert('No Username found! Please enter your Username')
    }

    this.userName = localStorage.getItem('userName')

    setTimeout(() => {
      this.loading = false;
    }, 3000);

    this.socket = io(SOCKET_URL)
  },
  watch: {
    videos() {
      this.scrollResultsToTop();
    }
  },
  methods: {
    generateUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    },
    videoPlayable() {
      console.log('VIDEO PLAYABLE')
    },
    videoNotPlayable() {
      this.isVideoPlayable = false
    },
    async searchVideos() {
      try {
        this.loading = true;
        console.log(this.searchText)

        // TODO CREATE A SERVICE FOR REQUESTS FALLBACKS
        const response = await fetch(YOUTUBE_REQUEST_URL_BUILDER(this.searchText), {
          headers: {
            'X-RapidAPI-Key': 'c7bcb170d6mshe578c0a54f72cfcp10ff03jsna074fd3e491b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        });

        const data = await response.json();
        this.handleSerchResultEmit(data.items)

        this.videos = data.items;
      } catch (error) {
        alert(error.message);
        console.error('Error searching for videos:', error.message);
      } finally {
        this.loading = false;
      }
    },
    validateVideo(video) {
      video.verifying = true
      this.verifyingVideo = true
      this.loadVideo = true
      this.videoObj = video
      this.videoId = video.id.videoId
      this.inspectPlayability()
      this.embedVideo()
      this.sendToQueue(video)
    },
    inspectPlayability() {
      setTimeout(() => {
        this.$refs.youtubePlayer.playVideo();
      }, 1000)
    },
    embedVideo() {
      setTimeout(() => {
        this.loadVideo = false
      }, 2000)
    },
    sendToQueue(video) {
      setTimeout(() => {
        this.verifyingVideo = false
        this.snackbarMessage = video.snippet.title
        const videoTitle = video.snippet.title;
        const isKaraokeVideo = videoTitle.toLowerCase().includes('karaoke');
        if (!isKaraokeVideo) {
          this.unplayableVideos.add(video.id.videoId)
          return alert('The video you selected is not a karaoke type!');
        }
        
        if (this.isVideoPlayable) {
          this.addToQueue(video)
          this.isVideoPlayable = true

          this.isModalVisible = true
          this.autoCloseModal()
          return
        } else {
          this.unplayableVideos.add(video.id.videoId)
        }
      }, 2100)
    },
    autoCloseModal() {
      setTimeout(() => {
        this.isModalVisible = false
      }, 4000)
    },
    async addToQueue(video) {

      this.addedVideos.add(video.id.videoId);
      const songToQueue = { videoId: video.id.videoId, title: video.snippet.title, addedBy: this.userName }
      const metaData = { thumbnails: video.snippet.thumbnails, publishedAt: video.snippet.publishedAt }
      this.socket.emit(SOCKET_EVENTS.ADD_SONG_TO_QUEUE, { songToQueue, metaData });
    },
    isUnplayable(video) {
      return this.unplayableVideos.has(video.id.videoId);
    },
    isAdded(video) {
      // Check if video is in the set of added videos
      return this.addedVideos.has(video.id.videoId);
    },
    scrollResultsToTop() {
      // Scroll to the top of the results container
      if (this.$refs.resultsContainer) {
        this.$refs.resultsContainer.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleSerchResultEmit(results) {
      const searchResults = results.map(data => ({
        thumbnails: data.snippet.thumbnails,
        publishedAt: data.snippet.publishedAt,
        videoId: data.id.videoId,
        title: data.snippet.title,
        searchQuery: this.searchText
      }))

      this.socket.emit(SOCKET_EVENTS.SAVE_SEARCH_RESULT, { searchResults, searchQuery: this.searchText })
    },
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
};
</script>

<style scoped>
.button-container {
  margin-top: 10px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 576px) {
  .loading-container {
    flex-direction: column;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
