<template>
  <main
    id="legacy"
    class="bootstrap-wrapper"
  >
    <WhatIsWTM />
    <Schedule />
    <Speakers />
    <Organizers />
    <Sponsors />
    <Travel />
    <Faq />
    <WhereIs />
  </main>
</template>

<script>
import '~/assets/css/bootstrap.min.css'
import WhatIsWTM from './WhatIsWTM'
import Schedule from './Schedule'
import Speakers from './Speakers'
import Organizers from './Organizers'
import Sponsors from './Sponsors'
import Travel from './Travel'
import Faq from './Faq'
import WhereIs from './WhereIs'

export default {
  components: {
    WhatIsWTM,
    Schedule,
    Speakers,
    Organizers,
    Sponsors,
    Travel,
    Faq,
    WhereIs
  }
}
</script>

<style lang="scss">
@import '../../../../assets/scss/_vars.scss';

#legacy {
  font-family: 'Montserrat', sans-serif;
  color: #002d63;

  a {
    text-decoration: none;
  }

  p {
    margin: 18px 0;
  }
}

.container-separator {
  margin-top: 60px;
  text-align: center;
  margin-bottom: 30px;
}

.section-seperator__title {
  @extend .section__title;
  text-align: center;
}

.section__title {
  font-size: 25px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 50px;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    font-size: 60px;
  }
}

.section__title--white {
  @extend .section__title;
  color: white;
}

.section__paragraph {
  font-size: 16px;
  line-height: 25px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 18px;
    line-height: 30px;
  }
}

.section__rrss-item {
  color: #4d4d4d;
  margin: 10px;
  font-size: 20px;
  &:hover {
    color: #4385f5;
    text-decoration: none;
  }
}

.section__rrss-item--white {
  @extend .section__rrss-item;
  color: white;
}

.past__button {
  background-color: rgba(109, 229, 185, 0.8);
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  color: white;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 36px;
  }
  font-size: 20px;
  font-weight: lighter;
  padding: 8px 20px;
  margin: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: white;
    background-color: rgba(109, 229, 185, 1);
    text-decoration: none;
  }
}

// * {
//   outline: 1px solid red;
// }
</style>
