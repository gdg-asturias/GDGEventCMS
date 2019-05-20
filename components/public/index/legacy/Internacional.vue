<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Internacional
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="https://www.google.es?q=wtm+asturias">
          <img
            src="/img/web/google.png"
            class="sponsors__img sponsor_internacional"
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

.sponsor_internacional {
  max-width: 260px;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-width: 500px;
    max-height: 150px;
  }
}
</style>
