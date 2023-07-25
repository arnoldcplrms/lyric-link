<template>
  <div id="linksDiv" class="list-group bg-dark">
    <div class="button-container">
      <button @click="playNext" type="button" class="btn btn-success w-100" :disabled="!songs.length">Next</button>
    </div>

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
  </div>
</template>

<script>
import eventbus from '@/utils/eventbus';
export default {
  props: {
    songs: {
      type: Array,
    },
    currentSong: {
      type: Object,
    },
  },
  methods:{
    playNext(){
      eventbus.$emit('next-song')
    }
  }

};


</script>

<style scoped>
/* Styles for the component */
#linksDiv {
  font-size: 8px !important;
  position: absolute;
  top: 0;
  right: 0;
  width: 15%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f8f9fa;
  margin-right: 14.5px;
}

.list-group-scroll {
  max-height: 100vh;
  overflow-y: auto;
}

.button-container {
  margin-bottom: 10px;
  margin-top: 10px;
}

.alert-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
</style>
