<template>
  <div class="md:container">
    <router-link
      v-for="talk in talks"
      :key="talk.id"
      :to="`/feedback/${talk.id}`"
      tag="div"
      class="cursor-pointer"
    >
      <Talk :talk="talk" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Talk from '~/components/feedback/talk.vue'

export default {
  layout: 'feedback',
  head: {
    title: 'Feedback | WTM Asturias 2019'
  },
  components: {
    Talk
  },
  computed: {
    ...mapGetters('talks', { talks: 'getTalksWithSpeakers' })
  },
  fetch({ store }) {
    return store.dispatch('talks/fetchTalks')
  }
}
</script>

<style>
</style>
