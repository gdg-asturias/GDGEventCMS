<template>
  <div class="text-wtm-green font-bold pb-2 text-center">
    <countdown
      v-if="time > 0"
      :time="time"
    >
      <template slot-scope="props">
        {{ props.days | doubleZero }} : {{ props.hours | doubleZero }} : {{ props.minutes | doubleZero }} : {{ props.seconds | doubleZero }}
      </template>
    </countdown>
  </div>
</template>

<script>
import moment from 'moment'

import countdown from '@chenfengyuan/vue-countdown'

export default {
  components: {
    countdown
  },
  filters: {
    doubleZero(number) {
      return ('0' + number).slice(-2)
    }
  },
  computed: {
    time() {
      const today = moment(Date.now())
      const eventDay = moment('04-06-2019', 'MM-DD-YYYY')
      return eventDay.diff(today, 'milliseconds')
    }
  }
}
</script>
