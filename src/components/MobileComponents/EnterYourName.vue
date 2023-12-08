<template>
  <v-container>
    <v-row justify="center" align="center" style="min-height: 100vh;">
      <v-col cols="12" md="6">
        <v-card class="p-3">
          <v-form @submit.prevent="handleSubmit">
            <v-text-field
              v-model="username"
              label="Enter your name"
              required
            ></v-text-field>
            <v-btn type="submit" color="success" block class="mt-3">Proceed</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
        return this.$alert('Please enter your Username!');
      }

      // Save name to localStorage
      localStorage.setItem('userName', this.username);

      // Navigate to the new route
      this.$router.push('/options');
    }
  }
};
</script>
