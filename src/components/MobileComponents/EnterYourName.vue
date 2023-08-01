<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
      <div class="col-md-6">
        <div class="card p-3">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input
                type="text"
                id="nameInput"
                class="form-control"
                v-model="username"
                placeholder="Enter your name"
                required
              />
            </div>
            <button type="submit" class="btn btn-success w-100 mt-3">Proceed</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    handleSubmit() {
     if (!this.username.length) {
      return alert('Please enter your Username!')
     }

      // Save name to localStorage
      localStorage.setItem('userName', this.username);

      // Navigate to the new route
      this.$router.push('/options');
    }
  }
};
</script>
