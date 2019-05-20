<template>
  <div class="wtm-container">
    <div class="container">
      <div
        id="what-is"
        class="row what-is"
      >
        <div class="col-sm-12">
          <h2 class="section__title text-wtm-blue-dark">
            ¿Qué es WTM?
          </h2>
        </div>
        <div class="col-sm-12">
          <div>
            <img
              src="img/web/gdg-asturias-foto-family.png"
              class="what-is__img-item"
            >
          </div>
        </div>
        <div class="col-sm-12">
          <p class="section__paragraph">
            <a
              class="text-wtm-blue-dark font-bold no-underline"
              href="https://www.womentechmakers.com/"
            >Women Techmakers</a> es una iniciativa global de Google que organizamos localmente desde el GDG Asturias. Queremos celebrar el talento técnico femenino y disfrutar en comunidad de una jornada sobre tecnología y desarrollo de software.
          </p>
        </div>
        <div class="col-xs-6 col-sm-3 mt-4">
          <div class="table__container">
            <p class="table__title text-wtm-green">
              1 día
            </p>
            <p class="table__subtitle text-wtm-blue-dark font-bold">
              de 9 a 19h
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3 mt-4">
          <div class="table__container">
            <p class="table__title text-wtm-green">
              200
            </p>
            <p class="table__subtitle text-wtm-blue-dark font-bold">
              asistentes
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3 mt-4">
          <div class="table__container">
            <p class="table__title text-wtm-green">
              12
            </p>
            <p class="table__subtitle text-wtm-blue-dark font-bold">
              charlas
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3 mt-4">
          <div class="table__container">
            <p class="table__title text-wtm-green">
              LUDOTECA
            </p>
            <p class="table__subtitle text-wtm-blue-dark font-bold">
              de 3 a 11 años
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-20">
        <div class="col-xs-12 lg:hidden mb-4">
          <div class="mb-8 text-center organizers__title">
            PREMIO WTM ASTURIAS
          </div>
        </div>
        <div class="col-xs-6 col-lg-3">
          <div class="flex justify-center items-center">
            <a
              v-scroll-to="'#premio'"
              href="#premio"
            >
              <img
                class="h-24 sm:h-32 md:h-48"
                src="/img/Premio-WTM-Asturias.png"
              >
            </a>
          </div>
        </div>
        <div class="col-xs-6 lg:hidden">
          <div class="flex justify-center items-center">
            <a
              target="_blanck"
              href="https://vostokseis.com/"
            >
              <img
                class="h-24 sm:h-32 md:h-48"
                src="/img/logo-vostok-6.png"
              >
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-lg-6">
          <div class="lg:block hidden text-center organizers__title">
            PREMIO WTM ASTURIAS
          </div>
          <p class="section__paragraph">
            Este primer premio es para las astronautas <a
              class="text-wtm-blue-dark font-bold"
              target="_blanck"
              href="https://twitter.com/pombita/"
            >Paloma</a>, <a
              class="text-wtm-blue-dark font-bold"
              target="_blanck"
              href="https://twitter.com/Patycritter/"
            >Patricia</a> y <a
              class="text-wtm-blue-dark font-bold"
              target="_blanck"
              href="https://twitter.com/AndreaBarberL/"
            >Andrea</a> de <a
              class="text-wtm-blue-dark font-bold"
              target="_blanck"
              href="https://vostokseis.com/"
            >Vostok6</a>, un podcast de entrevistas a mujeres pioneras.
          </p>
        </div>
        <div class="col-lg-3">
          <div class="lg:flex hidden justify-center items-center">
            <a
              target="_blanck"
              href="https://vostokseis.com/"
            >
              <img
                class="h-24 sm:h-32 md:h-48"
                src="/img/logo-vostok-6.png"
              >
            </a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 text-center">
        <img
          src="img/dots.png"
          class="mb-24 mt-16 lg:mt-6 h-3"
        >
      </div>
      <div class="row organizers">
        <div class="col-xs-12 col-sm-6 col-md-offset-1">
          <div class="col-sm-12 organizers__title">
            Organizan:
          </div>
          <div class="organizers__organizer col-xs-12 col-sm-6">
            <a
              href="http://www.asturvalley.com/"
              class="organizers__item"
            >
              <img
                class="organizers__item-img"
                src="img/web/asturvalley.png"
              >
            </a>
            <div class="organizers__rrss">
              <a
                class="section__rrss-item"
                href="https://twitter.com/Asturvalley"
              ><span class="icon-twitter" /></a>
              <a
                class="section__rrss-item"
                href="https://www.linkedin.com/company/astur-valley-asociaci%C3%B3n-asturiana-de-startups/"
              ><span class="icon-linkedin" /></a>
            </div>
          </div>
          <div class="organizers__organizer col-xs-12 col-sm-6">
            <a
              href="http://gdgasturias.com"
              class="organizers__item"
            >
              <img
                class="organizers__item-img"
                src="img/web/gdgasturias.png"
              >
            </a>
            <div class="organizers__rrss">
              <a
                class="section__rrss-item"
                href="https://twitter.com/GDGAsturias"
              ><span class="icon-twitter" /></a>
              <a
                class="section__rrss-item"
                href="https://www.linkedin.com/company/gdgasturias/"
              ><span class="icon-linkedin" /></a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 mt-4 md:mt-0">
          <div class="col-sm-12 organizers__title">
            Apoya:
          </div>
          <div class="organizers__organizer col-xs-12">
            <a
              href="http://www.epigijon.uniovi.es/"
              class="organizers__item"
              target="_blank"
            >
              <img
                class="organizers__item-img"
                src="img/web/epi-logo.jpg"
              >
            </a>
            <div class="organizers__rrss">
              <a
                class="section__rrss-item"
                href="https://twitter.com/epigijon"
                target="_blank"
              >
                <span class="icon-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatIsWTM'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../../assets/scss/_vars.scss';

.wtm-container {
  background-image: url('/img/lines-02-L.png'), url('/img/lines-01-R.png');
  background-position: left bottom, right top;
  background-size: 15vw, 15vw;
  background-repeat: no-repeat;
}

.what-is {
  padding-top: 20px;
  @media (min-width: map-get($grid-breakpoints, md)) {
    padding-top: 60px;
  }
}

.what-is-bottom {
  padding-bottom: 50px;
}

.what-is__img-item {
  width: 100%;
  height: auto;
}

.organizers {
  margin-top: 32px;
  margin-bottom: 32px;
}

.organizers__title {
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.organizers__title-icon {
  color: #1ce9b6;
}

.organizers__item {
  text-align: center;
  display: block;
  height: 150px;
  padding: 20px 0;
}

.organizers__item-img {
  filter: grayscale(100%);
  width: 100%;
  max-width: 185px;
  height: auto;
  max-height: 110px;
  transition: all 0.4s;
  &:hover {
    filter: grayscale(0%);
  }
}

.organizers__rrss {
  text-align: center;
}

.table__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.table__title {
  text-align: center;
  font-size: 44px;
  @media (max-width: map-get($grid-breakpoints, lg)) {
    font-size: 26px;
  }
  font-weight: bold;
  margin: 5px 0;
}

.table__subtitle {
  text-align: center;
  font-size: 32px;
  @media (max-width: map-get($grid-breakpoints, lg)) {
    font-size: 16px;
  }
  margin: 5px 0;
}
</style>
