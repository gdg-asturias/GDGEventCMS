<template>
  <div class="sponsors-container">
    <div
      id="sponsors"
      class="container sponsors"
    >
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            Patrocinadores
          </h2>
        </div>
        <div class="col-xs-12">
          <p class="section__paragraph">
            Women Techmakers Asturias es posible gracias a los patrocinadores y colaboradores que nos ayudan.
          </p>
          <p class="section__paragraph">
            Si tu empresa también quiere apoyar esta segunda edición, solo tienes que escribirnos a <a href="mailto:wtm@gdgasturias.com">wtm@gdgasturias.com</a>.
          </p>
        </div>
        <internacional />
        <global-partner />
        <sponsors-tera />
        <sponsors-giga />
        <sponsors-mega />
        <sponsors-ludoteca />
        <sponsors-colaboradores />
      </div>
    </div>
  </div>
</template>

<script>
import Internacional from './Internacional'
import GlobalPartner from './GlobalPartner'
import SponsorsTera from './SponsorsTera'
import SponsorsGiga from './SponsorsGiga'
import SponsorsMega from './SponsorsMega'
import SponsorsLudoteca from './SponsorsLudoteca'
import SponsorsColaboradores from './SponsorsColaboradores'

export default {
  name: 'Sponsors',
  components: {
    Internacional,
    GlobalPartner,
    SponsorsTera,
    SponsorsGiga,
    SponsorsMega,
    SponsorsColaboradores,
    SponsorsLudoteca
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../../assets/scss/_vars.scss';

.sponsors-container {
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

.sponsors {
  padding-top: 60px;
  padding-bottom: 60px;
}

.sponsors__img {
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
}

.sponsors__subtitle {
  font-size: 30px;
  line-height: 1em;
  margin-top: 20px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 40px;
  }
}

.sponsors__item {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.sponsors__media-img {
  filter: grayscale(100%);
  padding: 5px;
  max-height: 50px;
  &:hover {
    filter: grayscale(0%);
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-height: 100px;
  }
}
</style>
