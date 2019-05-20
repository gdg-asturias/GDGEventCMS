<template>
  <li
    class="schedule__table-item"
    @click="show = !show"
  >
    <div class="schedule__table-item-line">
      <div class="schedule__table-item-hour">
        {{ talk.hour }}
      </div>
      <div
        v-if="existsTrack1"
        :id="`talk${talk.track1.id}`"
        class="schedule__table-item-track"
      >
        <h3 class="schedule__table-item-track-title ">
          track 1
        </h3>
        <div
          :class="talk.track1.speakers.length < 2 ? 'schedule__table-item-conference' : 'schedule__table-item-conference-speakers'"
          v-html="talk.track1.title"
        />
        <div v-if="talk.track1.speakers.length === 1" class="schedule__table-item-speaker">
          <img
            v-for="speaker in talk.track1.speakers"
            :key="speaker.id"
            v-scroll-to="`#speaker${speaker.id}`"
            :src="speaker.picture"
            :alt="`${speaker.name} ${speaker.surname}`"
            class="schedule__table-item-speaker-img"
            @click.stop
          >
        </div>
        <div v-else class="schedule__table-item-speakers">
          <img
            v-for="speaker in talk.track1.speakers"
            :key="speaker.id"
            v-scroll-to="`#speaker${speaker.id}`"
            :src="speaker.picture"
            :alt="`${speaker.name} ${speaker.surname}`"
            class="schedule__table-item-speaker-img schedule__table-item-speaker-imgs"
            @click.stop
          >
        </div>
      </div>
      <div
        :id="talk.track2 ? talk.track2.id : ''"
        class="schedule__table-item-track"
      >
        <template v-if="existsTrack2">
          <h3 class="schedule__table-item-track-title">
            track 2
          </h3>
          <div
            :class="talk.track2.speakers.length < 2 ? 'schedule__table-item-conference' : 'schedule__table-item-conference-speakers'"
            v-html="talk.track2.title"
          />
          <div v-if="talk.track2.speakers.length === 1" class="schedule__table-item-speaker">
            <img
              v-for="speaker in talk.track2.speakers"
              :key="speaker.id"
              v-scroll-to="`#speaker${speaker.id}`"
              :src="speaker.picture"
              :alt="`${speaker.name} ${speaker.surname}`"
              class="schedule__table-item-speaker-img"
              @click.stop
            >
          </div>
          <div v-else class="schedule__table-item-speakers">
            <img
              v-for="speaker in talk.track2.speakers"
              :key="speaker.id"
              v-scroll-to="`#speaker${speaker.id}`"
              :src="speaker.picture"
              :alt="`${speaker.name} ${speaker.surname}`"
              class="schedule__table-item-speaker-img schedule__table-item-speaker-imgs"
              @click.stop
            >
          </div>
        </template>
      </div>
      <span
        v-show="hasAnyDescripcion"
        class="schedule__table-item-speaker-icon icon-arrow-down"
      />
    </div>
    <collapse-transition>
      <div
        v-show="show && hasAnyDescripcion"
        class="schedule__table-item-collapsable row"
      >
        <div
          v-if="talk.track1 && talk.track1.description"
          class="schedule__table-item-collapsable-track col-xs-12 col-md-6"
        >
          <h3 class="schedule__table-item-collapsable-title">
            {{ talk.track1.title }}
          </h3>
          <p class="section__paragraph">
            {{ talk.track1.description }}
          </p>
        </div>
        <div
          v-if="talk.track2 && talk.track2.description"
          class="schedule__table-item-collapsable-track col-xs-12 col-md-6"
        >
          <h3 class="schedule__table-item-collapsable-title">
            {{ talk.track2.title }}
          </h3>
          <p class="section__paragraph">
            {{ talk.track2.description }}
          </p>
        </div>
      </div>
    </collapse-transition>
  </li>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'ScheduleItem',
  components: {
    CollapseTransition
  },
  props: ['talk'],
  data: function() {
    return {
      show: false
    }
  },
  computed: {
    existsTrack1() {
      return !!this.talk.track1
    },
    existsTrack2() {
      return !!this.talk.track2
    },
    hasAnyDescripcion() {
      return (
        (this.existsTrack1 && !!this.talk.track1.description) ||
        (this.existsTrack2 && !!this.talk.track2.description)
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';

.schedule {
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url(/img/bg-agenda.png);
  background-position: center center;
  background-size: cover;
}

ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
.schedule__table-item {
  font-size: 18px;
  padding: 0 25px;
  &:nth-child(even) {
    color: white;
  }
  &:nth-child(odd) {
    background-color: white;
  }
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 14px;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    font-size: 16px;
  }
}

.schedule__table-item-line {
  padding: 16px 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 0;
  }
}
.schedule__table-item-track-title {
  display: block;
  white-space: nowrap;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: none;
  }
}
.schedule__table-item-track {
  position: relative;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    padding-left: 15px;
    padding-right: 15px;
    width: 46%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.schedule__table-item-hour {
  width: 50px;
}

.schedule__table-item-conference {
  padding-bottom: 16px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
    padding: 0 20px;
  }
}

.schedule__table-item-conference-speakers {
  padding-bottom: 16px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70%;
    padding: 0 20px;
  }
}

.schedule__table-item-speaker {
  position: absolute;
  top: -10px;
  right: 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    position: static;
    display: flex;
    align-items: center;
  }
}

.schedule__table-item-speakers {
  position: absolute;
  top: -10px;
  right: 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    position: static;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.schedule__table-item-speaker-img {
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: solid 3px white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.schedule__table-item-speaker-icon {
  font-size: 12px;
  margin-left: 10px;
}
.schedule__table-item-collapsable {
  padding-bottom: 20px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: flex;
    justify-content: space-between;
    padding-left: 70px;
  }
}
.schedule__table-item-collapsable-track {
  padding-left: 15px;
  padding-right: 15px;
}
.schedule__table-item-collapsable-title {
  font-size: 18px;
  line-height: 1em;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 24px;
  }
}
.schedule__table-item-speaker-imgs {
  margin-left: 8px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    margin-bottom: 8px;
  }
}
</style>
