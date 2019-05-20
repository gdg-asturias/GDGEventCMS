<template>
  <a
    :href="tweet"
    target="_blank"
    class="bg-white border border-grey-lighter flex p-4 items-center hover:bg-grey-lighter no-underline"
  >
    <div class="ml-3 flex flex-col justify-around w-full">
      <h1 class="text-xl mb-2 text-wtm-blue-dark mr-4">
        {{ challenge.title }}
      </h1>
    </div>
    <i class="fab fa-twitter text-wtm-blue-dark mr-2" />
    <i class="fas fa-chevron-right text-wtm-blue-dark" />
  </a>
</template>

<script>
export default {
  props: {
    challenge: {
      type: Object,
      required: true
    }
  },
  computed: {
    tweet() {
      const BASE_URL = 'https://twitter.com/intent/tweet'

      const { text, hashtags, related, via } = this.challenge

      const query = []

      if (text) {
        query.push(`text=${text}`)
      }

      if (hashtags) {
        query.push(`hashtags=${hashtags.join(',')}`)
      }

      if (related) {
        query.push(`related=${related.join(',')}`)
      }

      if (via) {
        query.push(`via=${via}`)
      }

      return `${BASE_URL}?${query.join('&')}`
    }
  }
}
</script>
