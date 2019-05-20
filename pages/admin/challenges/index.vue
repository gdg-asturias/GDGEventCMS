<template>
  <section>
    <div class="flex justify-between">
      <h1>
        Challenges 🏆
      </h1>
      <router-link
        class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        tag="button"
        to="/admin/challenges/new"
      >
        New
      </router-link>
    </div>
    <div
      v-if="challenges && challenges.length"
      class="mt-4"
    >
      <router-link
        v-for="challenge in challenges"
        :key="challenge.id"
        :to="`/admin/challenges/${challenge.id}`"
        tag="div"
        class="news-item bg-white border border-grey-lighter flex p-4 hover:bg-grey-lighter"
      >
        <div class="ml-3 flex flex-col justify-around">
          <p>🏆 {{ challenge.title }}</p>
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
    ...mapState('challenges', ['challenges'])
  },
  fetch({ store }) {
    return store.dispatch('challenges/fetchChallenges')
  }
}
</script>

<style>
</style>
