<template>
  <main>
    <WebHeader />
    <LegacyContainer :class="legacyContainerClasses" />
    <WebFooter />
  </main>
</template>

<script>
import WebHeader from '~/components/public/index/WebHeader'
import LegacyContainer from '~/components/public/index/legacy/LegacyContainer'
import WebFooter from '~/components/public/index/WebFooter'

export default {
  layout: 'public',
  components: {
    WebHeader,
    LegacyContainer,
    WebFooter
  },
  computed: {
    legacyContainerClasses() {
      const mediaQuery = window.matchMedia('(max-height: 700px)')
      if (mediaQuery.matches) {
        return 'mt-8 sm:mt-20 md:mt-4'
      }

      return ''
    }
  },
  fetch({ store }) {
    return Promise.all([
      store.dispatch('speakers/fetchSpeakers'),
      store.dispatch('talks/fetchTalks'),
      store.dispatch('faqs/fetchFaqs')
    ])
  }
}
</script>
