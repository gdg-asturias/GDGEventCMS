<template>
  <section>
    <h1>
      Talk 📝
    </h1>
    <form
      class="mt-4 bg-white border border-grey-lighter flex p-4 flex-wrap"
      @submit.prevent="onSubmit"
    >
      <AppInput
        v-model="talk.title"
        :label="'title'"
        class="sm:w-1/3"
        required
        placeholder="title"
      />
      <AppInput
        v-model="talk.hour"
        label="hour"
        type="time"
        class="sm:w-1/3"
        required
        placeholder="hour"
      />
      <AppSelect
        v-model="talk.track"
        label="track"
        class="sm:w-1/3"
        required
        placeholder="track"
      >
        <option value="track1">
          Track 1
        </option>
        <option value="track2">
          Track 2
        </option>
      </AppSelect>
      <AppSelect
        v-if="talk.id"
        v-model="talk.speakersIds"
        :multiple="true"
        :options="speakers"
        :track-by="'id'"
        :custom-label="option => `${option.name} ${option.surname}`"
        label="speakers"
        placeholder="speakers"
      >
        <template slot-scope="props">
          <div class="flex items-center">
            <img
              :src="props.props.option.picture"
              class="hidden sm:block w-8 h-8 rounded-full"
            >
            <span class="ml-2">{{ props.props.option.name }} {{ props.props.option.surname }}</span>
          </div>
        </template>
      </AppSelect>
      <AppInput
        v-model="talk.description"
        label="description"
        type="textarea"
        placeholder="description"
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
    <div class="flex justify-between mt-8">
      <h2>
        Feedback 😍
      </h2>
      <div v-if="showFeedback">
        <button
          class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
          @click="donwloadCsv"
        >
          Export CSV
        </button>
      </div>
    </div>
    <template v-if="showFeedback">
      <div class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center">
        <StarRating
          :rating="average"
          :read-only="true"
          :increment="0.01"
          class="mb-4"
        />
      </div>
      <div
        v-for="(feedback, index) in feedbacks"
        :key="index"
        class="mt-4 bg-white border border-grey-lighter flex flex-col p-4 items-center"
      >
        {{ feedback.message }}
      </div>
    </template>
    <template v-else>
      <div class="mt-4 flex flex-col items-center">
        <img src="https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif">
      </div>
    </template>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Papa from 'papaparse'
import { saveAs } from 'file-saver'

import StarRating from 'vue-star-rating'
import AppInput from '~/components/shared/AppInput'
import AppSelect from '~/components/shared/AppSelect'

export default {
  layout: 'admin',
  components: {
    AppInput,
    AppSelect,
    StarRating
  },
  computed: {
    ...mapState('talk', ['talk']),
    ...mapState('feedbacks', ['feedbacks']),
    ...mapState('speakers', ['speakers']),
    ...mapGetters('feedbacks', ['average']),
    showFeedback() {
      return this.feedbacks && this.feedbacks.length
    },
    showDelete() {
      return !!this.talk.id
    },
    selectedSpeakers() {
      if (!this.talk.speakersIds || !this.talk.speakersIds.length) {
        return []
      }

      return this.speakers
        .filter(speaker => this.talk.speakersIds.includes(speaker.id))
        .map(speaker => ({
          id: speaker.id,
          picture: speaker.picture,
          name: speaker.name,
          surname: speaker.surname,
          twitter: speaker.twitter ? speaker.twitter : '',
          linkedin: speaker.linkedin ? speaker.linkedin : ''
        }))
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('talk/fetch', params.id),
      store.dispatch('speakers/fetchSpeakers')
    ])

    const talk = store.state.talk.talk

    return store.dispatch('feedbacks/fetch', talk.id)
  },
  methods: {
    ...mapActions('talk', ['save', 'delete']),
    ...mapActions('speaker', { updateSpeaker: 'save' }),
    async onSubmit() {
      this.$nuxt.$loading.start()

      await Promise.all([this.saveSpeaker(), this.saveTalk()])

      this.$router.push('/admin/talks')
    },
    async onDelete() {
      this.$nuxt.$loading.start()
      await this.delete(this.talk)
      this.$router.push('/admin/talks')
    },
    donwloadCsv() {
      const csv = Papa.unparse(this.feedbacks)
      const blob = new Blob([csv], { type: 'text/csv' })
      saveAs(blob, `feedback.csv`)
    },
    saveTalk() {
      const payload = {
        talk: {
          ...this.talk,
          speakers: this.selectedSpeakers
        }
      }

      return this.save(payload)
    },
    saveSpeaker() {
      if (
        !this.talk.id ||
        (!this.talk.speakers && this.talk.speakers.length === 0)
      ) {
        return Promise.resolve()
      }

      return Promise.all(
        this.selectedSpeakers.map(speaker => {
          const payload = {
            speaker: {
              ...speaker,
              talkId: this.talk.id,
              talk: {
                title: this.talk.title,
                id: this.talk.id
              }
            }
          }

          return this.updateSpeaker(payload)
        })
      )
    }
  }
}
</script>

<style>
</style>
