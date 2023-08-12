<template>
  <div class="bg-dark">
    <div id="linksDiv" class="list-group bg-dark">
      <div class="alert alert-success" role="alert">
        Now playing : <br>
        <h5>{{ currentSong.title || 'NONE' }}</h5>
        Added by:
        <h5>{{ currentSong.addedBy || 'NONE' }}</h5>
        Remaining songs: {{ songs.length }}
      </div>

      <span class="d-flex justify-content-center align-items-center mt-2" v-if="songs.length === 0">
        <h5 class="text-light">NO SONGS ADDED</h5>
      </span>

      <div class="list-group-scroll">
        <li v-for="(song, index) in songs" :key="index" class="list-group-item bg-dark border-0 py-3 text-light">
          <p v-if="index + 1 === 1" class="fs-5 text-warning">UP NEXT </p>
          <p :class="index + 1 === 1 ? 'mb-1 fs-6 text-warning' : 'mb-1 fs-6'">#{{ index + 1 }} {{ song.title }}</p>
          <p :class="index + 1 === 1 ? 'mb-1 fs-6 text-warning' : 'mb-1 fs-6'">Added by: {{ song.addedBy }}</p>
        </li>
      </div>
      <div class="button-container">
        <div class="d-flex justify-content-between mt-2">
          <!-- Add icon to the Play button -->
          <button @click="playOrPauseVideo" type="button" class="btn w-50"
            :class="videoPaused ? 'btn-success' : 'btn-primary'" style="margin-right: 5px;">
            <i v-if="videoPaused" class="bi-play-fill"></i>
            <i v-else class="bi-pause-fill"></i> 
            (1)
          </button>
          <!-- Add icon to the Next button -->
          <button @click="playNext" type="button" class="btn btn-danger w-50" :disabled="!songs.length">
            <i class="bi-skip-forward-fill"></i>
            (2)
          </button>
        </div>

        <div class="d-flex justify-content-between mt-2">
          <!-- Add icon to the Backward button -->
          <button @click="reverse" type="button" class="btn btn-warning w-50" style="margin-right: 5px;">
            <i class="bi-chevron-double-left"></i>
            (3)
          </button>
          <!-- Add icon to the Forward button -->
          <button @click="forward" type="button" class="btn btn-info w-50">
            <i class="bi-chevron-double-right"></i>
            (4)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VIDEO_CONTROL_EVENTS } from '@/constants';
import eventbus from '@/utils/eventbus';
export default {
  data: () => ({
    videoPaused: true
  }),
  props: {
    songs: {
      type: Array,
    },
    currentSong: {
      type: Object,
    },
  },
  mounted() {
    document.addEventListener('keypress', this.handleKeyPress);
  },
  methods: {
    playNext() {
      eventbus.$emit(VIDEO_CONTROL_EVENTS.NEXT_SONG)
    },
    playOrPauseVideo() {
      if (this.videoPaused) {
        eventbus.$emit(VIDEO_CONTROL_EVENTS.PLAY)
        this.videoPaused = false
      } else {
        eventbus.$emit(VIDEO_CONTROL_EVENTS.PAUSE)
        this.videoPaused = true
      }
    },
    forward() {
      eventbus.$emit(VIDEO_CONTROL_EVENTS.FAST_FORWARD)
    },
    reverse() {
      eventbus.$emit(VIDEO_CONTROL_EVENTS.REVERSE)
    },
    handleKeyPress(event) {
      switch (event.key) {
        case '1':
          this.playOrPauseVideo()
          break;
        case '2':
          this.playNext()
          break;
        case '3':
          this.reverse()
          break;
        case '4':
          this.forward()
          break;
        default:
          break;
      }
    }
  }

};


</script>

<style scoped>
/* Styles for the component */
#linksDiv {
  width: 100%;
  height: 95vh;
  overflow-y: scroll;
  background-color: #f8f9fa;
  padding-right: 20px;
  margin-top: 15px;
}

.list-group-scroll {
  height: 100%;
  max-height: 100vh;
  overflow-y: auto;
}

.alert-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

* {
  font-size: 6px !important;
}

i {
  font-size: 15px !important;
}
</style>
