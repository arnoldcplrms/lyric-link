<template>
  <div class="row bg-dark" style="height: 100%;">
    <div class="col-10" style="pointer-events: none;">
      <YouTubePlayer :videoId="videoId" :width="'100%'" :height="'100%'" :playerVars="playerVars" @onEnd="nextSong"
        @onError="errorHandler" ref="youtubePlayer" />
    </div>
    <div class="col-2" style="height: 100%;">
      <SongsQueue :currentSong="currentSong" :songs="songs" />
    </div>
  </div>
</template>

<script>
import eventBus from '@/utils/eventbus';
import YouTubePlayer from '@/components/SessionComponents/YoutubePlayer.vue';
import SongsQueue from './SongsQueue.vue';
import { SOCKET_URL, SOCKET_EVENTS, VIDEO_CONTROL_EVENTS } from '@/constants';
import io from 'socket.io-client';

export default {
  components: {
    SongsQueue,
    YouTubePlayer,
  },
  beforeUnmount() {
    // Close the socket connection when the component is destroyed
    this.socket.disconnect();
  },
  data: () => ({
    videoId: 'dq912y_GK3o',
    playerVars: {
      disablekb: 1,
      rel: 0,
      controls:0
    },
    currentSong: {
      title: null,
      addedBy: null
    },
    songs: [{
      videoId: "tEU77i0RjN4",
      addedBy: "arnold",
      title: "YOU",
    },
    { videoId: 'XlfTirShNsw', title: 'Magbalik - Callalily (Karaoke)', addedBy: 'Arnold' }],
    player: null,
    socket: null
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
    this.initSocket()
  },
  methods: {
    initSocket() {
      // Connect to the socket server
      this.socket = io(SOCKET_URL);

      // Handle events from the server
      this.socket.on(SOCKET_EVENTS.ADD_SONG_TO_QUEUE, (data) => {
        this.songs.push(data)
      });

      // Handle any errors that occur with the socket connection
      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });
    },
    initEventBus() {
      const eventsMap = {
        [VIDEO_CONTROL_EVENTS.NEXT_SONG]: this.nextSong,
        [VIDEO_CONTROL_EVENTS.PLAY]: this.playVideo,
        [VIDEO_CONTROL_EVENTS.PAUSE]: this.pauseVideo,
        [VIDEO_CONTROL_EVENTS.FAST_FORWARD]: this.seekForward,
        [VIDEO_CONTROL_EVENTS.REVERSE]: this.seekBackward,
      };

      for (const [event, handler] of Object.entries(eventsMap)) {
        eventBus.$on(event, handler);
      }
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
      if (this.songs.length) {
        const nextSong = this.songs.shift();
        this.videoId = nextSong.videoId
        this.currentSong.addedBy = nextSong.addedBy
        this.currentSong.title = nextSong.title
      }
    },
    errorHandler() {
      alert('error')
    },
    playVideo() {
      this.$refs.youtubePlayer.playVideo();
    },
    pauseVideo() {
      this.$refs.youtubePlayer.pauseVideo();
    },
    seekBackward() {
      this.$refs.youtubePlayer.seekBackward();
    },
    seekForward() {
      this.$refs.youtubePlayer.seekForward();
    },
  }
};
</script>

<style scoped>
.col-10 .col-2 {}
</style>
