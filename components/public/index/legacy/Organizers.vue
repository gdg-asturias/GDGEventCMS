<template>
  <div class="organizers-container">
    <div
      id="team"
      class="container speakers"
    >
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            Equipo
          </h2>
        </div>
        <organizer-item
          v-for="(organizer, index) in organizers"
          :key="organizer.id"
          :organizer="organizer"
          :per-row="4"
          :index="index"
        />
        <organizer-item
          v-for="(organizer, index) in volunteers"
          :key="organizer.id"
          :organizer="organizer"
          :per-row="3"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Organizers',
  components: {
    'organizer-item': resolve => require(['./OrganizersItem'], resolve)
  },
  data() {
    return {
      organizers: [],
      volunteers: []
    }
  },
  async created() {
    const shuffle = require('shuffle-array')

    const { data: organizers } = await axios.get(
      `/data/organizers.json?t=${new Date().getTime()}`
    )

    this.organizers = shuffle(organizers)

    const { data: volunteers } = await axios.get(
      `/data/volunteers.json?t=${new Date().getTime()}`
    )

    this.volunteers = shuffle(volunteers)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
.organizers-container {
  background-image: url('/img/lines-06-L.png');
  background-position: left center;
  background-size: 10vw;
  background-repeat: no-repeat;
}

.speakers {
  padding-top: 60px;
}
</style>
