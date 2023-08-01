<template>
  <div style="height: 100vh;">
      <router-view></router-view>
  </div>
</template>

<script>
import VideoEmbed from './components/SessionComponents/VideoEmbed.vue'
import AddSongs from './components/MobileComponents/AddSongs.vue'
import LyricLinkLogin from './components/LyricLinkLogin.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VideoEmbed,
    // eslint-disable-next-line vue/no-unused-components
    AddSongs,
    // eslint-disable-next-line vue/no-unused-components
    LyricLinkLogin
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
