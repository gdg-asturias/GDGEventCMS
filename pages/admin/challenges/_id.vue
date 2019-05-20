<template>
  <section>
    <h1>
      Challenge 🏆
    </h1>
    <form
      class="mt-4 bg-white border border-grey-lighter flex p-4 flex-wrap"
      @submit.prevent="onSubmit"
    >
      <AppInput
        v-model="challenge.title"
        :label="'Title'"
        required
        placeholder="Title"
      />
      <AppInput
        v-model="challenge.hashtags"
        label="Hashtags (separed with comma)"
        placeholder="Hashtags"
      />
      <AppInput
        v-model="challenge.related"
        label="Related accounts (separed with comma)"
        placeholder="Related"
      />
      <AppInput
        v-model="challenge.via"
        label="Via"
        placeholder="Via"
      />
      <AppInput
        v-model="challenge.text"
        :label="'Text'"
        type="textarea"
        placeholder="Text"
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
import { get } from 'lodash'

export default {
  layout: 'admin',
  components: {
    AppInput
  },
  computed: {
    ...mapState('challenge', { firebaseChallenge: 'challenge' }),
    showDelete() {
      return !!this.challenge.id
    },
    challenge() {
      return {
        ...this.firebaseChallenge,
        hashtags: get(this.firebaseChallenge, 'hashtags', []).join(','),
        related: get(this.firebaseChallenge, 'related', []).join(',')
      }
    }
  },
  methods: {
    ...mapActions('challenge', ['save', 'delete']),
    async onSubmit() {
      this.$nuxt.$loading.start()

      const payload = {
        ...this.challenge,
        hashtags: get(this.challenge, 'hashtags', '').split(','),
        related: get(this.challenge, 'related', '').split(',')
      }

      await this.save(payload)

      this.$router.push('/admin/challenges')
    },
    async onDelete() {
      this.$nuxt.$loading.start()

      await this.delete(this.challenge)

      this.$router.push('/admin/challenges')
    }
  },
  fetch({ store, params }) {
    return store.dispatch('challenge/fetch', params.id)
  }
}
</script>

<style>
</style>
