<template>
  <div
    :class="`col-sm-${perRow}`"
    class="col-xs-6 organizer-item"
  >
    <img
      :src="organizer.picture"
      class="organizer-item__picture"
    >
    <h3 class="sm:mb-4 sm:mt-4">
      <span class="organizer-item__name">
        {{ organizer.name }}
      </span>
      <span class="organizer-item__name--surname">
        {{ organizer.surname }}
      </span>
    </h3>
    <h3 class="sm:mb-4">
      <span class="organizer-item__name--surname">
        {{ organizer.subtitle }}
      </span>
    </h3>
    <div class="organizers-item__rrss">
      <a
        v-if="organizer.social.twitter"
        :href="organizer.social.twitter"
        class="section__rrss-item"
      >
        <span class="icon-twitter" />
      </a>
      <a
        v-if="organizer.social.linkedin"
        :href="organizer.social.linkedin"
        class="section__rrss-item"
      >
        <span class="icon-linkedin" />
      </a>
      <a
        v-if="organizer.social.facebook"
        :href="organizer.social.facebook"
        class="section__rrss-item"
      >
        <span class="icon-facebook" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizersItem',
  props: ['organizer', 'perRow']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';
.organizer-item {
  padding-top: 20px;
  padding-bottom: 40px;
  min-height: 200px;
  text-align: center;
  &:last-child {
    border: none;
  }
}
.organizer-item__social {
  text-align: center;
  padding-bottom: 30px;
}

.organizers-item__rrss {
  text-align: center;
}

h3 {
  min-height: 50px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    min-height: auto;
  }
}

.organizer-item__name {
  font-size: 14px;
  text-transform: uppercase;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 16px;
  }
}

.organizer-item__name--surname {
  @extend .organizer-item__name;
  color: #4385f5;
}

.organizer-item__picture {
  filter: grayscale(100%);

  border-radius: 50%;
  width: 100px;
  height: 100px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    width: 120px;
    height: 120px;
  }
  &:hover {
    filter: grayscale(0%);
  }
}
</style>
