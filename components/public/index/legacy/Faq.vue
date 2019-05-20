<template>
  <div
    id="faq"
    class="faq"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title--white">
            FAQ
          </h2>
        </div>
        <div class="col-xs-12 faq__table">
          <ul>
            <faq-item
              v-for="(faq, index) in faqs"
              :key="index"
              :faq="faq"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Faq',
  components: {
    'faq-item': resolve => require(['./FaqItem'], resolve)
  },
  computed: {
    ...mapState('faqs', ['faqs'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';
.faq {
  padding-top: 60px;
  padding-bottom: 50px;
  background-image: url(/img/bg-faq.png);
  background-position: center center;
  background-size: cover;
}

ul {
  padding-left: 0;
}
</style>
