<template>
  <div class="container d-flex justify-content-center align-items-center" id="login-container">
    <div class="card p-4">
      <div class="text-center mb-4">
        <img src="path/to/lyriclink-logo.png" alt="LyricLink Logo" class="brand-logo">
      </div>
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-success mt-4 w-100">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login() {
      // Add your login logic here
      console.log('Login attempt with:', this.username, this.password);
    }
  }
};
</script>

<style>
#login-container {
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.brand-logo {
  max-width: 150px;
}

.card {
  /* Add additional styles to make the card more visually appealing if needed */
  /* e.g., box-shadow, border-radius, background-color */
}
</style>
