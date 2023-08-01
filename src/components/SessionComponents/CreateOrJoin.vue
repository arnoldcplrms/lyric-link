<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
      <div class="col-md-6 text-center">
        <button @click="joinKaraokeSession" class="btn btn-success btn-lg btn-block my-3 w-100">Join a Karaoke Session</button>
        <button @click="createKaraokeSession" class="btn btn-success btn-lg btn-block my-3 w-100">Create a Karaoke Session</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    joinKaraokeSession() {
      // Navigate to the Join Karaoke Session page
      this.$router.push('/add-songs');
    },
    createKaraokeSession() {
      // Navigate to the Create Karaoke Session page
      this.$router.push('/session');
    }
  }
};
</script>
