<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Mega
    </h3>
    <div class="row">
      <div class="col-sm-4 sponsors__item">
        <a href="http://www.citipa.org/">
          <img
            src="/img/web/citipa_logo.png"
            class="sponsors__mega-img sponsors__img citipa"
          >
        </a>
      </div>
      <div class="col-sm-4 sponsors__item">
        <a href="https://www.simbiosys.es/">
          <img
            src="/img/web/simbiosys.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-sm-4 sponsors__item">
        <a href="https://velneo.es/?utm_source=wwtm">
          <img
            src="/img/web/velneo.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-sm-4 sponsors__item">
        <a href="http://www.treelogic.com">
          <img
            src="/img/web/treelogic.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-sm-4 sponsors__item">
        <a href="http://www.siroko.com">
          <img
            src="/img/web/siroko.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-sm-4 sponsors__item">
        <a href="https://impulsa.gijon.es/">
          <img
            src="/img/web/impulsa.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-sm-offset-4 col-sm-4 sponsors__item">
        <a href="https://sngular.com/">
          <img
            src="/img/web/sngular.png"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
      <!--
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.codesai.com/">
          <img src="/img/web/CODESAI.jpg" class="sponsors__mega-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.ruralvia.com/cms/estatico/rvia/grupo/ruralvia/es/particulares/index.html">
          <img src="/img/web/caja-rural.jpg" class="sponsors__mega-img sponsors__img">
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsMega'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.citipa {
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-height: 115px !important;
    margin-bottom: 0 !important;
  }
}

.sponsors__mega-img {
  padding: 5px;
  max-height: 70px;
  margin-bottom: 20px;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-height: 115px;
  }
}
</style>
