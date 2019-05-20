<template>
  <section class="custom-container">
    <div
      :class="bgClass"
      class="bg-image"
    />
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="onSubmit"
    >
      <p class="text-5xl text-center">
        🎟
      </p>
      <template v-if="!loggingIn">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="email"
          >
        </div>
        <div class="flex items-center justify-between">
          <input
            type="submit"
            value="Login"
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
        </div>
      </template>
      <p
        v-else
        class="text-m italic"
      >
        Te hemos enviado un email para que puedas iniciar sesión 🎉.
      </p>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      loggingIn: false
    }
  },
  computed: {
    bgClass() {
      const classes = ['bg-image1', 'bg-image2']
      return classes[Math.floor(Math.random() * classes.length)]
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    onSubmit() {
      this.loggingIn = true
      this.login(this.email)
    }
  }
}
</script>

<style>
.custom-container {
  margin: 0 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-image1 {
  background-image: url('/img/bg1.png');
}

.bg-image2 {
  background-image: url('/img/bg2.jpeg');
}

.bg-image {
  filter: blur(10px);
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
