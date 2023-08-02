<template>
  <div style="height: 110vh;">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
