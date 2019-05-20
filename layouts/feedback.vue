<template>
  <div>
    <FeedbackHeader />
    <div class="flex feedback justify-center pb-8 flex-wrap">
      <nuxt
        nuxt-child-key="none"
        class="w-5/6 pt-4"
      />
    </div>
    <WebFooter class="web-footer" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import FeedbackHeader from '~/components/feedback/FeedbackHeader'
import WebFooter from '~/components/public/index/WebFooter'

export default {
  components: {
    FeedbackHeader,
    WebFooter
  },
  methods: {
    ...mapActions('account', ['logout'])
  }
}
</script>

<style scoped>
.feedback {
  background-image: url(/img/bg-agenda.png);
  background-position: center center;
  background-size: cover;
  min-height: calc(100vh - 523px);
}
</style>
