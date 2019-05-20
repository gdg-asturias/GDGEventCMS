<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Global
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="https://www.capgemini.com/es-es/">
          <img
            src="/img/web/capgemini_logo.jpg"
            class="sponsors__img sponsor_global"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalPartner'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.sponsor_global {
  max-width: 260px;

  @media (min-width: map-get($grid-breakpoints, md)) {
    max-width: 500px;
    max-height: 360px;
  }
}
</style>
