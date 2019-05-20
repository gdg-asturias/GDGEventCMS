<template>
  <div class="speakers-container">
    <div
      id="speakers"
      class="container speakers"
    >
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            Speakers
          </h2>
        </div>
        <div class="col-xs-12">
          <speaker-item
            v-for="speaker in speakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Speakers',
  components: {
    'speaker-item': resolve => require(['./SpeakersItem'], resolve)
  },
  data() {
    return {
      speakers: []
    }
  },
  computed: {
    ...mapState('speakers', { storeSpeakers: 'speakers' })
  },
  created() {
    const shuffle = require('shuffle-array')

    this.speakers = shuffle(this.storeSpeakers)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
.speakers-container {
  background-image: url('/img/lines-04-L.png'), url('/img/lines-03-R.png'),
    url('/img/lines-05-L.png'), url('/img/lines-07-R.png'),
    url('/img/lines-04-L.png'), url('/img/lines-03-R.png'),
    url('/img/lines-05-L.png'), url('/img/lines-07-R.png'),
    url('/img/lines-05-L.png'), url('/img/lines-07-R.png');
  background-position: left bottom, right top, left 800px, right 1400px,
    left 2000px, right 2600px, left 3200px, right 3800px, left 4400px,
    right 5000px;
  background-size: 10vw, 10vw, 10vw, 10vw;
  background-repeat: no-repeat;
}

.speakers {
  padding-top: 60px;
}
</style>
