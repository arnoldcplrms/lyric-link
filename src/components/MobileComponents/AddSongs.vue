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
                    @click="addToQueue(video)" :disabled="isAdded(video)">
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
import { testVideos, MAX_PAGE_RESULT, YOUTUBE_API_KEY, SOCKET_URL, SOCKET_EVENTS } from "@/constants";
import io from 'socket.io-client';

export default {
  data: () => ({
    searchText: '',
    videos: testVideos,
    addedVideos: new Set(),
    loading: true,
    userName: '',
    socket: null,
  }),
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
    async searchVideos() {
      try {
        this.loading = true;
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${encodeURIComponent(
            `${this.searchText}+Karaoke`
          )}&part=snippet&type=video&maxResults=${MAX_PAGE_RESULT}&videoEmbeddable=true`
        );

        const data = await response.json();
        this.videos = data.items;
      } catch (error) {
        alert(error.message);
        console.error('Error searching for videos:', error.message);
      } finally {
        this.loading = false;
      }
    },
    addToQueue(video) {
      // Implement the logic to add the video to your queue here
      const videoTitle = video.snippet.title;
      const isKaraokeVideo = videoTitle.toLowerCase().includes('karaoke');
      if (!isKaraokeVideo) {
        return alert('The video you selected is not a karaoke type!');
      }

      this.addedVideos.add(video.id.videoId);
      const songToQueue = { videoId: video.id.videoId, title: video.snippet.title, addedBy: this.userName }
      console.log('Video added to queue:', songToQueue);

      this.socket.emit(SOCKET_EVENTS.ADD_SONG_TO_QUEUE, songToQueue);
    },
    isAdded(video) {
      return this.addedVideos.has(video.id.videoId); // Check if video is in the set of added videos
    },
    scrollResultsToTop() {
      // Scroll to the top of the results container
      if (this.$refs.resultsContainer) {
        this.$refs.resultsContainer.scrollIntoView({ behavior: 'smooth' });
      }
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
