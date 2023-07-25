<template>
  <div :id="playerId" :style="{ width: width, height: height }"></div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '640px'
    },
    height: {
      type: String,
      default: '360px'
    },
    playerVars: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      playerId: 'youtube-player-' + Math.random().toString(36).substr(2, 9),
      player: null
    };
  },
  mounted() {
    // Load the YouTube Iframe API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = this.initializePlayer;
    } else {
      this.initializePlayer();
    }
  },
  watch: {
    videoId(newVideoId) {
      if (this.player) {
        this.player.loadVideoById(newVideoId);
      }
    }
  },
  methods: {
    initializePlayer() {
      // eslint-disable-next-line no-undef
      this.player = new YT.Player(this.playerId, {
        height: this.height,
        width: this.width,
        videoId: this.videoId,
        playerVars: this.playerVars,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
          onError: this.onPlayerError
        }
      });
    },
    onPlayerReady() {
      // You can perform any actions here after the player is ready (e.g., autoplay)
    },
    onPlayerStateChange(event) {
      switch (event.data) {
        // eslint-disable-next-line no-undef
        case YT.PlayerState.PLAYING:
          this.$emit('onPlay');
          break;
        // eslint-disable-next-line no-undef
        case YT.PlayerState.PAUSED:
          this.$emit('onPause');
          break;
        // eslint-disable-next-line no-undef
        case YT.PlayerState.ENDED:
          this.$emit('onEnd');
          break;
        // Add other cases as needed (e.g., buffering, video cued, etc.)
      }
    },
    onPlayerError(event) {
      this.$emit('onError', event.data);
    }
  },
  beforeUnmount() {
    // Clean up the player when the component is destroyed
    if (this.player) {
      this.player.destroy();
    }
  }
};
</script>
