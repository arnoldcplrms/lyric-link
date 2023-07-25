<template>
  <div class="row" style="height: 100vh;">
    <div class="col-10">
      <YouTubePlayer 
      :videoId="videoId" 
      :width="'100%'" :height="'100%'" 
      :playerVars="{
        'disablekb': 1,
        'showinfo': 0,
        'rel': 0,
      }" 
      @onEnd="nextSong"
      @onError="errorHandler"/>
    </div>

    <div class="col-2" style="height: 100vh;">
      <SongsQueue :currentSong="currentSong" :songs="songs" />
    </div>
  </div>
</template>

<script>
import EventBus from '@/utils/eventbus';
import YouTubePlayer from '@/components/SessionComponents/YoutubePlayer.vue';
import SongsQueue from './SongsQueue.vue';

export default {
  components: {
    SongsQueue,
    YouTubePlayer,
  },
  data: () => ({
    videoId: 'dq912y_GK3o',
    currentSong: {
      title: null,
      addedBy: null
    },
    songs: [{
      videoId: "tEU77i0RjN4",
      addedBy: "arnold",
      title: "YOU",
    }],
    player: null
  }),
  watch: {
    videoId(newVideoId) {
      if (this.player) {
        this.player.loadVideoById(newVideoId);
      }
    },
  },
  mounted() {
    this.initEventBus()
  },
  methods: {
    initEventBus() {
      // Listen for an event to update the videoId from another component
      EventBus.$on('next-song', () => {
        this.nextSong()
      });
    },
    captureChange(event) {
      const YOUTUBE_VIDEO_ON_END_EVENT_CODE = 0;
      if (event.data === YOUTUBE_VIDEO_ON_END_EVENT_CODE) {
        console.log('VIDEO ENDED');
      }
    },
    onPlayerStateChange(event) {
      const YOUTUBE_VIDEO_EVENT_CODE = 0;
      if (event.data === YOUTUBE_VIDEO_EVENT_CODE) {
        this.nextSong()
      }
    },
    nextSong() {
      const nextSong = this.songs.shift();
      this.videoId = nextSong.videoId
      this.currentSong.addedBy = nextSong.addedBy
      this.currentSong.title = nextSong.title
    },
    errorHandler(){
      alert('error')
    }
  }
};
</script>

<style scoped></style>
