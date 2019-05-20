<template>
  <div class="md:container">
    <Talk
      :talk="talk"
      :show-chevron="false"
    />
    <div class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center">
      <h2 class="mb-4">
        Compartir en:
      </h2>
      <div class="flex flex-row justify-center items-center">
        <a
          :href="twitterUrl"
          class="bg-wtm-blue-ligth hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline"
        >
          <i class="fab fa-twitter" /> Twitter
        </a>
      </div>
    </div>
    <form
      v-if="!sent && !sending"
      class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center"
      @submit.prevent="submitFeedback"
    >
      <StarRating
        v-model="feedback.rating"
        :increment="0.5"
        :star-size="starSize"
        class="mb-4 text-xs sm:text-base"
      />
      <div class="mb-4 w-full pr-2 pl-2">
        <textarea
          id="message"
          v-model="feedback.message"
          rows="4"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Deja tu feedback 😍"
        />
      </div>
      <input value="Enviar" type="submit" class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded">
    </form>
    <div
      v-else-if="!sent && sending"
      class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center"
    >
      <BallBeatLoader color="#002D63" />
    </div>
    <div
      v-else-if="sent && !sending"
      class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center"
    >
      <p class="mb-2 text-wtm-blue-dark text-xl p-4">
        <i class="fas fa-check-double" /> Feedback enviado
      </p>
      <router-link tag="button" class="bg-wtm-blue-dark hover:bg-wtm-blue text-white font-bold py-2 px-4 rounded no-underline" to="/feedback">
        <i class="fas fa-chevron-left" /> Volver al feedback
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { isMobile } from 'is-mobile'

import StarRating from 'vue-star-rating'
import 'vue-loaders/dist/vue-loaders.css'
import VueLoadersBallBeat from 'vue-loaders/dist/loaders/ball-beat'
import Talk from '~/components/feedback/talk.vue'

export default {
  layout: 'feedback',
  head: {
    title: 'Feedback | WTM Asturias 2019'
  },
  components: {
    StarRating,
    Talk,
    BallBeatLoader: VueLoadersBallBeat.component
  },
  data() {
    return {
      sending: false,
      sent: false
    }
  },
  computed: {
    ...mapState('talk', ['talk']),
    ...mapState('feedback', ['feedback']),
    ...mapState('speaker', ['speaker']),
    twitterUrl() {
      if (this.speaker.twitter) {
        return `https://twitter.com/intent/tweet?text=${this.talk.title} @${
          this.speaker.twitter
        }&hashtags=WTMAsturias2019,AsturTech&via=WTMAsturias`
      }

      return `https://twitter.com/intent/tweet?text=${
        this.talk.title
      }&hashtags=WTMAsturias2019,AsturTech&via=WTMAsturias`
    },
    starSize() {
      if (isMobile()) {
        return 30
      }

      return 50
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('talk/fetch', params.id)

    const talk = store.state.talk.talk
    return Promise.all([
      store.dispatch('speaker/fetch', talk.speakerId),
      store.dispatch('feedback/fetch', talk.id)
    ])
  },
  methods: {
    async submitFeedback() {
      this.sending = true
      this.$nuxt.$loading.start()

      await this.$store.dispatch('feedback/saveFeedback', {
        talk: this.talk,
        feedback: this.feedback
      })

      this.sending = false
      this.sent = true
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style>
</style>
