<template>
  <section id="speakers">
    <h2 class="section-title">
      Speakers
    </h2>
    <div
      v-for="speaker in randomizedSpeakers"
      :key="speaker.id"
      class="pt-8 pb-8 flex flex-row speaker flex-wrap"
    >
      <div class="flex flex-col w-full md:w-1/3 items-center">
        <img
          :src="speaker.picture"
          class="h-64 w-64 rounded-full"
        >
        <div class="flex flex-row items-center justify-center mt-6">
          <a
            v-if="speaker.twitter"
            :href="speaker.twitter"
          >
            <span class="icon-twitter" />
          </a>
          <a
            v-if="speaker.linkedin"
            :href="speaker.linkedin"
            class="ml-6"
          >
            <span class="icon-linkedin" />
          </a>
        </div>
      </div>
      <div class="w-full md:w-2/3">
        <h3 class="text-4xl uppercase font-bold">
          {{ speaker.name }} <span class="text-wtm-blue-ligth">{{ speaker.surname }}</span>
        </h3>
        <h4 class="text-xl mt-2 font-bold">
          {{ speaker.work }}
        </h4>
        <p class="mt-4 text-wtm-blue-dark">
          {{ speaker.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import shuffle from 'shuffle-array'

export default {
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  computed: {
    randomizedSpeakers() {
      return shuffle(this.speakers)
    }
  }
}
</script>

<style>
.speaker {
  border-bottom: #4385f5 1px solid;
}

a {
  color: black;
  font-size: 24px;
}
</style>
