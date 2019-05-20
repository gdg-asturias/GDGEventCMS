<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Tera
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="https://www.mecalux.es/">
          <img
            src="/img/web/mecalux.jpg"
            class="sponsors__img sponsors__tera-img"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsTera'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.sponsors__tera-img {
  padding: 5px;
  max-height: 80px;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-width: 450px;
    max-height: 160px;
  }
}
</style>
