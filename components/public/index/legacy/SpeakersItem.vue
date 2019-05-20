<template>
  <div
    :id="`speaker${speaker.id}`"
    class="row speaker-item"
  >
    <div class="col-xs-12 col-sm-4 speaker-item__social mb-4">
      <img
        :src="speaker.picture"
        class="speaker-item__picture"
      >
      <div class="speakers-item__rrss">
        <a
          v-if="speaker.social && speaker.social.twitter"
          :href="speaker.social.twitter"
          class="section__rrss-item"
        >
          <span class="icon-twitter" />
        </a>
        <a
          v-if="speaker.social && speaker.social.linkedin"
          :href="speaker.social.linkedin"
          class="section__rrss-item"
        >
          <span class="icon-linkedin" />
        </a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-8">
      <h3>
        <span class="speaker-item__name">
          {{ speaker.name }}
        </span>
        <span class="speaker-item__name--surname">
          {{ speaker.surname }}
        </span>
      </h3>
      <h4 class="mt-6 mb-6">
        {{ speaker.work }}
      </h4>
      <p
        class="section__paragraph"
        v-html="speaker.description"
      />
      <p
        v-if="speaker.talk"
        class="mt-6"
      >
        <span class="speaker-item__speaking-in">
          Speaking in:
        </span>
        <a
          v-scroll-to="`#talk${speaker.talk.id}`"
          :href="`#talk${speaker.talk.id}`"
        >
          {{ speaker.talk.title }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakersItem',
  props: ['speaker']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';

.speaker-item {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: #4385f5 1px solid;
  &:last-child {
    border: none;
  }
}

.speaker-item__social {
  text-align: center;
}

.speakers-item__rrss {
  text-align: center;
}

.speaker-item__name {
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 40px;
  }
}

.speaker-item__name--surname {
  @extend .speaker-item__name;
  color: #4385f5;
}

.speaker-item__picture {
  border-radius: 50%;
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.speaker-item__speaking-in {
  color: #002045;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
