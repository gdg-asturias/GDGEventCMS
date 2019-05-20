<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Ludoteca
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="https://www.codesai.com/">
          <img
            src="/img/web/CODESAI.jpg"
            class="sponsors__mega-img sponsors__img"
          >
        </a>
      </div>
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
  @media (max-width: map-get($grid-breakpoints, md)) {
    max-height: 85px !important;
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
