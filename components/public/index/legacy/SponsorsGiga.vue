<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Giga
    </h3>
    <div class="row">
      <div class="col-xs-12 col-md-6 sponsors__item">
        <a href="https://www.accenture.com/es-es/digital-index">
          <img src="/img/web/accenture.png" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-12 col-md-6 sponsors__item">
        <a href="https://bstartup.bancsabadell.com/">
          <img src="/img/web/sabadell.png" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsGiga'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.sponsors__giga-items {
  display: flex;
  align-items: center;
}
.sponsors__giga-img {
  padding: 5px;
  margin-bottom: 30px;
  max-width: 190px;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-width: 340px;
  }
}
</style>
