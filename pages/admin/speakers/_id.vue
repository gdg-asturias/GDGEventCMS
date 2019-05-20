<template>
  <section>
    <h1>
      Speaker 🗣
    </h1>
    <form
      class="mt-4 bg-white border border-grey-lighter flex p-4 flex-wrap"
      @submit.prevent="onSubmit"
    >
      <div class="mb-4 w-full pr-2 pl-2 flex justify-center items-center flex-col sm:flex-row">
        <img
          v-if="picture"
          :src="picture"
          class="w-32 h-32 rounded-full"
        >
        <div :class="picture ? 'ml-0 sm:ml-4' : ''">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="picture"
          >
            picture
          </label>
          <input
            id="picture"
            class="appearance-none w-full"
            type="file"
            placeholder="picture"
            @change="preview"
          >
        </div>
      </div>
      <div class="mb-4 w-full sm:w-1/3 pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="name"
        >
          name
        </label>
        <input
          id="name"
          v-model="speaker.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="name"
        >
      </div>
      <div class="mb-4 w-full sm:w-1/3 pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="surname"
        >
          surname
        </label>
        <input
          id="surname"
          v-model="speaker.surname"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="surname"
        >
      </div>
      <div class="mb-4 w-full sm:w-1/3 pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="work"
        >
          work
        </label>
        <input
          id="work"
          v-model="speaker.work"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="work"
        >
      </div>
      <div class="mb-4 w-full sm:w-1/2 pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="twitter"
        >
          twitter
        </label>
        <input
          id="twitter"
          v-model="speaker.twitter"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="twitter"
        >
      </div>
      <div class="mb-4 w-full sm:w-1/2 pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="linkedin"
        >
          linkedin
        </label>
        <input
          id="linkedin"
          v-model="speaker.linkedin"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="linkedin"
        >
      </div>
      <div
        v-if="selectedTalk"
        class="mb-4 w-full pr-2 pl-2"
      >
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="talk"
        >
          talk
        </label>
        <router-link :to="`/admin/talks/${selectedTalk.id}`">
          {{ selectedTalk.title }}
        </router-link>
      </div>
      <div class="mb-4 w-full pr-2 pl-2">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="description"
        >
          description
        </label>
        <textarea
          id="description"
          v-model="speaker.description"
          rows="4"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="description"
        />
      </div>
      <div class="w-full flex justify-center items-center">
        <input value="Save" type="submit" class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded">
        <button v-if="showDelete" class="ml-2 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded" @click.prevent="onDelete">
          Delete
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'admin',
  data() {
    return {
      file: null
    }
  },
  computed: {
    ...mapState('speaker', ['speaker']),
    ...mapState('talks', ['talks']),
    showDelete() {
      return !!this.speaker.id
    },
    picture() {
      if (this.file) {
        return URL.createObjectURL(this.file)
      }

      return this.speaker.picture
    },
    selectedTalk() {
      return this.talks.find(talk => talk.id === this.speaker.talkId)
    }
  },
  fetch({ store, params }) {
    return Promise.all([
      store.dispatch('speaker/fetch', params.id),
      store.dispatch('talks/fetchTalks')
    ])
  },
  methods: {
    ...mapActions('speaker', ['save', 'delete']),
    ...mapActions('talk', { updateTalk: 'save' }),
    async onSubmit() {
      this.$nuxt.$loading.start()

      await Promise.all([this.saveSpeaker(), this.saveTalk()])

      this.$router.push('/admin/speakers')
    },
    async onDelete() {
      this.$nuxt.$loading.start()
      await this.delete(this.speaker)
      this.$router.push('/admin/speakers')
    },
    preview(event) {
      this.file = event.target.files[0]
    },
    saveSpeaker() {
      const talk = this.selectedTalk

      const payload = {
        speaker: {
          ...this.speaker,
          talk: {
            id: talk ? talk.id : null,
            title: talk ? talk.title : null
          }
        },
        file: this.file
      }

      return this.save(payload)
    },
    saveTalk() {
      if (!this.speaker.id || !this.speaker.talkId) {
        return Promise.resolve()
      }

      const talk = this.selectedTalk

      const speakerIndex = talk.speakers.findIndex(
        speaker => speaker.id === this.speaker.id
      )
      talk.speakers[speakerIndex] = {
        id: this.speaker.id,
        picture: this.speaker.picture,
        name: this.speaker.name,
        surname: this.speaker.surname,
        twitter: this.speaker.twitter ? this.speaker.twitter : '',
        linkedin: this.speaker.linkedin ? this.speaker.linkedin : ''
      }

      const payload = {
        talk
      }

      return this.updateTalk(payload)
    }
  }
}
</script>

<style>
</style>
