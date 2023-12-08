<template>
  <div class="bg-dark">
    <v-container>
      <v-alert class="alert-success" role="alert">
        Now playing : <br>
        <h5>{{ currentSong.title || 'NONE' }}</h5>
        Added by:
        <h5>{{ currentSong.addedBy || 'NONE' }}</h5>
        Remaining songs: {{ songs.length }}
      </v-alert>

      <v-row v-if="songs.length === 0" class="d-flex justify-content-center align-items-center mt-2">
        <h5 class="text-light">NO SONGS ADDED</h5>
      </v-row>

      <div class="list-group-scroll">
        <v-list>
          <v-list-item v-for="(song, index) in songs" :key="index" class="border-0 py-3">
            <p v-if="index + 1 === 1" class="fs-5 text-warning">UP NEXT </p>
            <p :class="index + 1 === 1 ? 'mb-1 fs-6 text-warning' : 'mb-1 fs-6'">#{{ index + 1 }} {{ song.title }}</p>
            <p :class="index + 1 === 1 ? 'mb-1 fs-6 text-warning' : 'mb-1 fs-6'">Added by: {{ song.addedBy }}</p>
          </v-list-item>
        </v-list>
      </div>
      <div class="button-container">
        <v-row class="d-flex justify-content-center mt-4">
          <v-btn-group>
            <v-btn size="small" @click="playOrPauseVideo" :class="[videoPaused ? 'btn-success' : 'btn-primary']">
              <v-icon v-if="videoPaused">mdi-play</v-icon>
              <v-icon v-else>mdi-pause</v-icon>
              (1)
            </v-btn>
            <v-btn size="small" @click="playNext" class="btn btn-danger" :disabled="!songs.length">
              <v-icon>mdi-skip-forward-fill</v-icon>
              (2)
            </v-btn>
            <v-btn size="small" @click="reverse" class="btn btn-warning">
              <v-icon>mdi-chevron-double-left</v-icon>
              (3)
            </v-btn>
            <v-btn size="small" @click="forward" class="btn btn-info">
              <v-icon>mdi-chevron-double-right</v-icon>
              (4)
            </v-btn>
          </v-btn-group>
        </v-row>
      </div>
    </v-container>
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
  height: 100vh;
  overflow-y: scroll;
  background-color: #f8f9fa;
  padding-right: 20px;
  margin-top: 15px;
}

.list-group-scroll {
  height:75vh;
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
