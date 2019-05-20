<template>
  <div id="app">
    <header class="h-12 bg-blue-dark z-50 flex items-center justify-center">
      <nav class="flex justify-between w-5/6">
        <div>
          <router-link
            to="/admin"
            exact
          >
            🎟
          </router-link>
          <router-link
            to="/admin/speakers"
            exact
          >
            Speakers
          </router-link>
          <router-link
            to="/admin/talks"
            exact
          >
            Talks
          </router-link>
          <router-link
            to="/admin/faqs"
            exact
          >
            FAQs
          </router-link>
          <router-link
            to="/admin/challenges"
            exact
          >
            Challenges
          </router-link>
        </div>
        <a @click.prevent="logout">
          Logout
        </a>
      </nav>
    </header>
    <div class="bg-grey-lightest h-admin flex justify-center">
      <nuxt
        nuxt-child-key="none"
        class="w-5/6 pt-4"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('account', ['logout'])
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.nuxt-link-active {
  @apply .font-bold;
}

.h-admin {
  min-height: calc(100vh - 3rem);
}
</style>
