<template>
  <section>
    <h1>
      FAQ ❓
    </h1>
    <form
      class="mt-4 bg-white border border-grey-lighter flex p-4 flex-wrap"
      @submit.prevent="onSubmit"
    >
      <AppInput
        v-model="faq.question"
        :label="'Question'"
        required
        placeholder="Question"
      />
      <AppInput
        v-model="faq.answer"
        label="Answer (HTML)"
        type="textarea"
        placeholder="Answer"
      />
      <div class="w-full flex justify-center items-center">
        <input
          value="Save"
          type="submit"
          class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        >
        <button
          v-if="showDelete"
          class="ml-2 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
          @click.prevent="onDelete"
        >
          Delete
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import AppInput from '~/components/shared/AppInput'
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'admin',
  components: {
    AppInput
  },
  computed: {
    ...mapState('faq', ['faq']),
    showDelete() {
      return !!this.faq.id
    }
  },
  methods: {
    ...mapActions('faq', ['save', 'delete']),
    async onSubmit() {
      this.$nuxt.$loading.start()

      await this.save(this.faq)

      this.$router.push('/admin/faqs')
    },
    async onDelete() {
      this.$nuxt.$loading.start()

      await this.delete(this.faq)

      this.$router.push('/admin/faqs')
    }
  },
  fetch({ store, params }) {
    return store.dispatch('faq/fetch', params.id)
  }
}
</script>

<style>
</style>
