<template>
  <div style="height: 100vh;">
    <!-- <VideoEmbed/> -->
    <AddSongs/>
  </div>
</template>

<script>
// import VideoEmbed from './components/SessionComponents/VideoEmbed.vue'
import AddSongs from './components/MobileComponents/AddSongs.vue'

export default {
  name: 'App',
  components: {
    // VideoEmbed,
    AddSongs
  }
}
</script>

<style>
/* html{
  font-size: 8px !important;
} */
</style>
