<template>
  <section>
    <div class="flex justify-between">
      <h1>
        FAQs ❓
      </h1>
      <router-link
        class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
        tag="button"
        to="/admin/faqs/new"
      >
        New
      </router-link>
    </div>
    <div
      v-if="faqs && faqs.length"
      class="mt-4"
    >
      <router-link
        v-for="faq in faqs"
        :key="faq.id"
        :to="`/admin/faqs/${faq.id}`"
        tag="div"
        class="news-item bg-white border border-grey-lighter flex p-4 hover:bg-grey-lighter"
      >
        <div class="ml-3 flex flex-col justify-around">
          <p>❓ {{ faq.question }}</p>
        </div>
      </router-link>
    </div>
    <div
      v-else
      class="mt-4 flex flex-col items-center"
    >
      <img src="https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif">
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapState('faqs', ['faqs'])
  },
  fetch({ store }) {
    return store.dispatch('faqs/fetchFaqs')
  }
}
</script>

<style>
</style>
