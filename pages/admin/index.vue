<template>
  <section>
    <h1>
      Hola! 👋🏻
    </h1>
    <h2 class="mt-8">
      Configuración
    </h2>
    <div class="flex items-center justify-center">
      <button
        v-if="showFeedback"
        class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        @click="disableFeedbackButton"
      >
        Ocultar botón feedback
      </button>
      <button
        v-else
        class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
        @click="enableFeedbackButton"
      >
        Mostrar botón feedback
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapGetters('config', ['showFeedback'])
  },
  fetch({ store }) {
    return store.dispatch('config/fetchConfig')
  },
  methods: {
    ...mapActions('config', ['updateFeedback']),
    async enableFeedbackButton() {
      this.$nuxt.$loading.start()
      await this.updateFeedback(true)
      this.$nuxt.$loading.finish()
    },
    async disableFeedbackButton() {
      this.$nuxt.$loading.start()
      await this.updateFeedback(false)
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
