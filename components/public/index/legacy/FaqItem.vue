<template>
  <li
    class="faq__table-item"
    @click="show = !show"
  >
    <div
      v-show="!show"
      class="faq__table-item-line mt-2 mb-2"
    >
      <div class="faq__table-item-conference">
        {{ faq.question }}
      </div>
      <div class="faq__table-item-speaker">
        <span class="faq__table-item-speaker-icon icon-arrow-down" />
      </div>
    </div>
    <collapse-transition>
      <div
        v-show="show"
        :class="{'faq-bg': show}"
        class="faq__table-item-collapsable"
      >
        <div class="flex justify-between items-center mb-4 mt-4">
          <h3
            v-show="show"
            class="faq__table-item-collapsable-title"
          >
            {{ faq.question }}
          </h3>
          <span
            :class="{'rotate-180': show}"
            class="faq__table-item-speaker-icon icon-arrow-down"
          />
        </div>
        <p
          class="section__paragraph"
          v-html="faq.answer"
        />
      </div>
    </collapse-transition>
  </li>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'FaqItem',
  components: {
    CollapseTransition
  },
  props: ['faq'],
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style>
#faq a {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';

li {
  list-style-type: none;
}
.faq__table-item {
  font-size: 18px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  &:last-child {
    border: none;
  }
}

.faq__table-item-line {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.faq__table-item-conference {
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  width: 100%;
  padding: 0 20px 0 0;
}

.faq__table-item-speaker-icon {
  font-size: 12px;
  margin-left: 10px;
}
.faq__table-item-collapsable {
  padding-bottom: 20px;
  cursor: pointer;
}

.faq__table-item-collapsable-title {
  margin-top: 10;
  font-size: 30px;
  line-height: 1em;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 40px;
  }
}

// .faq-bg {
//   opacity: 0.1;
//   background-color: #ffffff;
// }

.rotate-180 {
  transform: rotate(180deg);
}
</style>
