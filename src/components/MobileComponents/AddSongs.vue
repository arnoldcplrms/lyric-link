<template>
  <div style="height: 100vh;" class="container">
    <!-- Video cards -->
    <transition name="fade">
      <div v-if="!loading" ref="resultsContainer" style="padding-bottom: 50px; margin-top: 30px;">
        <div class="row">
          <div v-for="video in videos" :key="video.id.videoId" class="col-md-4 mb-4" style="margin-bottom: 30px;">
            <div class="card" style="border-radius: 10px;">
              <img :src="video.snippet.thumbnails.medium.url" class="card-img-top" alt="Video Thumbnail" />
              <div class="card-body">
                <div>
                  <span class="card-title">{{ video.snippet.title }}</span>
                </div>
                <div class="button-container">
                  <button
                    :class="['btn', 'w-100', 'btn-block', 'mt-2', isAdded(video) ? 'btn-outline-succes' : 'btn-success']"
                    @click="validateVideo(video)" :disabled="isAdded(video)">
                    {{ isAdded(video) ? 'Song Added' : 'Add To Queue' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="loading-container">
        <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="modal fade" tabindex="-1" role="dialog" ref="myModal" id="exampleModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal Title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div style="display:none;">
                <div v-if="loadVideo">
                  <YoutubePlayer :playerVars="playerVars" ref="youtubePlayer" width="'100%'" :height="'100%'" :videoId="videoId"
                    @onPlayerReady="videoPlayable" @onError="videoNotPlayable" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Loading element -->

    <!-- Search box for YouTube videos (moved to the bottom) -->
    <div class="fixed-bottom p-3 bg-white">
      <div class="input-group">
        <input v-model="searchText" type="text" class="form-control" placeholder="Search YouTube Karaoke Videos"
          @keyup.enter="searchVideos" />
        <div class="input-group-append">
          <button class="btn btn-success" type="button" @click="searchVideos">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testVideos, SOCKET_EVENTS, YOUTUBE_REQUEST_URL_BUILDER } from "@/constants";
import YoutubePlayer from '@/components/SessionComponents/YoutubePlayer.vue';
// import io from 'socket.io-client';
// import { addSongToDb } from "@/service/db-service";


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

    // this.socket = io(SOCKET_URL)
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

        // TODO CREATE A SERVICE FOR REQUESTS FALLBACKS
        const response = await fetch(YOUTUBE_REQUEST_URL_BUILDER(this.searchText), {
          headers: {
            'X-RapidAPI-Key': 'c7bcb170d6mshe578c0a54f72cfcp10ff03jsna074fd3e491b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        });
        const data = await response.json();
        console.log(data)
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
      this.loadVideo = true
      this.videoObj = video
      this.videoId = video.id.videoId
      this.videoUrl = this.generateUrl(this.videoId)
      this.inspectPlayability()
      this.embedVideo()
      this.sendToQueue()
      this.openModal()
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
    sendToQueue() {
      setTimeout(() => {
        if (this.isVideoPlayable) {
          console.log('VIDEO SENT TO QUEUE')
          // this.addToQueue()
          this.isVideoPlayable = true
        } else {
          alert('video is restricted by the author/channel')
          console.log('video is restricted by the author/channel')
        }
      }, 2500)
    },
    async addToQueue(video) {
      const videoTitle = video.snippet.title;
      const isKaraokeVideo = videoTitle.toLowerCase().includes('karaoke');
      if (!isKaraokeVideo) {
        return alert('The video you selected is not a karaoke type!');
      }

      this.addedVideos.add(video.id.videoId);
      const songToQueue = { videoId: video.id.videoId, title: video.snippet.title, addedBy: this.userName }
      const metaData = { thumbnails: video.snippet.thumbnails, publishedAt: video.snippet.publishedAt }
      this.socket.emit(SOCKET_EVENTS.ADD_SONG_TO_QUEUE, { songToQueue, metaData });
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
      this.$refs.myModal.classList.add('show');
      document.body.classList.add('modal-open');
      this.$refs.myModal.style.display = 'block';
    },
    closeModal() {
      this.$refs.myModal.classList.remove('show');
      document.body.classList.remove('modal-open');
      this.$refs.myModal.style.display = 'none';
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

@media (max-width: 576px) {
  .loading-container {
    flex-direction: column;
  }
}

/* Custom fade-in animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

</style>
