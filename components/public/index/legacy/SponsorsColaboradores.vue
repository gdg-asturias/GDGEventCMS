<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Colaboradores
    </h3>
    <div class="row">
      <!-- <div class="col-xs-4 sponsors__item">
        <a href="http://www.epigijon.uniovi.es/">
          <img src="/img/web/epi_logo.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div> -->
      <div class="col-xs-4 sponsors__item">
        <a
          href="http://congresos.gijon.es/"
          target="_blank"
        >
          <img
            src="/img/web/gijon_convention_bureau_logo.jpg"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <!-- <div class="col-xs-4 sponsors__item">
        <a href="http://www.ajeasturias.com/">
          <img src="/img/web/AJE_logo.png" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div> -->
      <div class="col-xs-4 sponsors__item">
        <a
          href="http://www.uniovi.es/"
          target="_blank"
        >
          <img
            src="/img/web/uniovi.jpg"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="https://gigas.com/"
          target="_blank"
        >
          <img
            src="/img/web/gigas.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="http://www.innovasturias.org/"
          target="_blank"
        >
          <img
            src="/img/web/innovasturias_logo.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.asana.bio">
          <img
            src="/img/web/asana.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.clustertic.net/">
          <img
            src="/img/web/clusterTIC_logo.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="http://catedrasmartcities.uniovi.es/"
          target="_blank"
        >
          <img
            src="/img/web/smartcities.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="https://www.stickermule.com/eu/uses?utm_source=sponsorship&utm_medium=referral&utm_campaign=WTA"
          target="_blank"
        >
          <img
            src="/img/web/sticker-mule.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="http://faseextra.com/"
          target="_blank"
        >
          <img
            src="/img/web/fase-logo.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="https://www.jetbrains.com/"
          target="_blank"
        >
          <img
            src="/img/web/jetbrains.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a
          href="https://www.gitkraken.com/?utm_source=meetup&utm_medium=email&utm_campaign=WTM_Asturias"
          target="_blank"
        >
          <img
            src="/img/web/gitkraken.png"
            class="sponsors__colaboradores-img sponsors__img"
          >
        </a>
      </div>
      <!-- <div class="col-xs-offset-4 col-xs-4 sponsors__item">
        <a href="https://www.pccomponentes.com/">
          <img src="/img/web/pc_componentes.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsColaboradores'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.sponsors__colaboradores-img {
  padding: 5px;
  max-height: 45px;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-height: 100px;
  }
}
</style>
