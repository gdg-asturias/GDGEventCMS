<template>
  <div
    id="schedule"
    class="schedule ss-style-zigzag"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title--white">
            Agenda
          </h2>
        </div>
        <div class="col-xs-12 schedule__table-header p-8">
          <h3>
            track 1
          </h3>
          <h3>
            track 2
          </h3>
        </div>
        <div class="col-xs-12 schedule__table">
          <ul>
            <schedule-item
              v-for="talk in schedule"
              :key="talk.hour"
              :talk="talk"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Schedule',
  components: {
    'schedule-item': resolve => require(['./ScheduleItem'], resolve)
  },
  computed: {
    ...mapGetters('talks', { schedule: 'getSchedule' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';

/* Zig Zag (3d up and simple down) */
.ss-style-zigzag::before,
.ss-style-zigzag::after {
  right: 0;
  left: 0;
  z-index: 10;
  display: block;
  height: 90px;
  background-size: 50px 100%;
}

.ss-style-zigzag::before {
  top: -90px;
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, transparent),
    color-stop(0.25, darken(red, 7%))
  );
  background-image: linear-gradient(
      315deg,
      darken(red, 2%) 25%,
      transparent 25%
    ),
    linear-gradient(45deg, darken(red, 7%) 25%, transparent 25%);
  background-position: 50%;
}

.ss-style-zigzag::after {
  top: 100%;
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, darken(red, 7%)),
    color-stop(0.25, red)
  );
  background-image: linear-gradient(
      135deg,
      darken(red, 7%) 25%,
      transparent 25%
    ),
    linear-gradient(225deg, darken(red, 7%) 25%, transparent 25%);
  background-position: 50%;
}

.schedule {
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url(/img/bg-agenda.png);
  background-position: center center;
  background-size: cover;
}
.schedule__table-header {
  display: none;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 70px;
    color: #fff;
    text-transform: uppercase;
  }
}
ul {
  padding-left: 0;
}
</style>
