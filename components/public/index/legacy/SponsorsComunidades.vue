<template>
  <div class="col-xs-12">
    <div class="row">
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.womentechmakers.com/">
          <img
            src="/img/web/communities/womentechmarkers.png"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://gdg.es/">
          <img
            src="/img/web/communities/gdgspain.png"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.meetup.com/es-ES/Agile-Asturias/">
          <img
            src="/img/web/communities/agileasturias.jpg"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.impulsotic.org/">
          <img
            src="/img/web/communities/impulsotic.jpg"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://startupgrindasturias.com/">
          <img
            src="/img/web/communities/startupgrind.png"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.unioviedo.es/medialab/">
          <img
            src="/img/web/medialab.png"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://makersasturias.com/">
          <img
            src="/img/web/communities/makers-asturias.jpg"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.drone4students.com/">
          <img
            src="/img/web/communities/Drone4Students.jpg"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.meetup.com/es-ES/Legal-Hackers-Asturias">
          <img
            src="/img/web/communities/legalhackers.jpg"
            class="sponsors__comunidades-img sponsors__img"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorsComunidades'
}
</script>

<style lang="scss" scopped>
@import '../../../../assets/scss/_vars.scss';

.sponsors__comunidades-img {
  padding: 5px;
  max-height: 70px;
  max-width: 100%;
  @media (min-width: map-get($grid-breakpoints, md)) {
    max-height: 100px;
    max-width: 100%;
  }
}
</style>
