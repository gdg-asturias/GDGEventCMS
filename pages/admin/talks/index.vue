<template>
  <section>
    <div class="flex justify-between">
      <h1>
        Talk 📝
      </h1>
      <router-link
        class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        tag="button"
        to="/admin/talks/new"
      >
        New
      </router-link>
    </div>
    <div
      v-if="talks && talks.length"
      class="mt-4"
    >
      <router-link
        v-for="talk in talks"
        :key="talk.id"
        :to="`/admin/talks/${talk.id}`"
        tag="div"
        class="news-item bg-white border border-grey-lighter flex p-4 hover:bg-grey-lighter"
      >
        <div class="ml-3 flex flex-col justify-around">
          <p>📝 {{ talk.title }}</p>
          <p>📍 {{ talk.track }}</p>
          <p>⏰ {{ talk.hour }}</p>
          <p v-if="talk.speakers && talk.speakers.length">
            🗣 <span
              v-for="(speaker, index) in talk.speakers"
              :key="speaker.id"
            >
              {{ speaker.name }} {{ speaker.surname }}<span v-if="index < talk.speakers.length - 1">, </span>
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div
      v-else
      class="mt-4 flex flex-col items-center"
    >
      <img src="https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif">
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapState('talks', ['talks'])
  },
  fetch({ store }) {
    return store.dispatch('talks/fetchTalks')
  }
}
</script>

<style>
</style>
