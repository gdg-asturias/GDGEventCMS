<template>
  <section>
    <div class="flex justify-between">
      <h1>
        Speakers 🗣
      </h1>
      <router-link
        class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        tag="button"
        to="/admin/speakers/new"
      >
        New
      </router-link>
    </div>
    <div class="mt-4">
      <ListItem
        v-for="speaker of speakers"
        :key="speaker.id"
        :item="speaker"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from '~/components/admin/ListItem'

export default {
  layout: 'admin',
  components: {
    ListItem
  },
  computed: {
    ...mapState('speakers', ['speakers'])
  },
  fetch({ store }) {
    return store.dispatch('speakers/fetchSpeakers')
  }
}
</script>

<style>
</style>
