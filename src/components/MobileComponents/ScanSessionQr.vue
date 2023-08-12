<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="decode-result text-center mb-3">
              Last result: <b>{{ result }}</b>
            </div>
            <div class="video-container">
              <qrcode-stream :paused="paused" @detect="onDetect" @error="onError" @camera-on="resetValidationState" :fit="fit"></qrcode-stream>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  components: { QrcodeStream },

  data() {
    return {
      isValid: undefined,
      paused: false,
      result: null
    }
  },

  methods: {
    onError: console.error,

    resetValidationState() {
      this.isValid = undefined
    },

    async onDetect([ firstDetectedCode ]) {
      this.result = firstDetectedCode.rawValue
      this.paused = true

      // You can perform any additional actions based on the scanned result here.
      // For example, redirect to a specific page or perform an API call.

      // For demonstration purposes, let's redirect to '/add-songs' after a delay of 3 seconds.
      await this.timeout(3000)
      this.$router.push('/add-songs');

      // Uncomment the following lines if you want to validate the scanned result
      // and display a success/failure message to the user.

      // this.paused = true
      // await this.timeout(3000)
      // this.isValid = this.result.startsWith('http')
      // await this.timeout(2000)
      // this.paused = false
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
    }
  }
}
</script>

<style scoped>
/* Mobile-friendly styles */
.card {
    box-shadow: none;
  }

  .video-container {
    display: flex;
    justify-content: center;
    overflow: hidden; /* Ensure the video doesn't overflow its container */
  }

  ::v-deep .qrcode-stream video {
    width: 100%;
  }
</style>
