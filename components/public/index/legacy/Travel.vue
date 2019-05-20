<template>
  <div
    id="travel"
    class="container travel mb-8"
  >
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          VIAJES
        </h2>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p class="section__paragraph">
          Nos encantaría que viniera gente de toda España, por eso contamos con los siguientes colaboradores que ofrecen descuentos para venir al WTM Asturias.
        </p>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p class="section__paragraph">
          Una vez compréis la entrada, os enviaremos los descuentos y una guía de Gijón/Oviedo para que no os perdáis nada 😄.
        </p>
      </div>
      <div class="col-xs-12">
        <div class="row">
          <div class="col-xs-6 col-sm-4 travel-item">
            <a href="https://renfe.com">
              <img
                class="travel-item__img"
                src="/img/web/renfe_logo.png"
              >
            </a>
            <p class="section__paragraph">
              35% de descuento
            </p>
          </div>
          <div class="col-xs-6 col-sm-4 travel-item">
            <a href="https://www.alsa.es/">
              <img
                class="travel-item__img"
                src="/img/web/alsa_logo.png"
              >
            </a>
            <p class="section__paragraph">
              desde un 10% de descuento
            </p>
          </div>
          <div class="col-xs-6 col-xs-offset-3 col-sm-offset-0 col-sm-4 travel-item">
            <img
              class="travel-item__img"
              src="/img/web/hoteles_logo.png"
            >
            <p class="section__paragraph">
              desde un 10% de descuento
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Travel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.travel {
  margin-top: 50px;
}
.travel-item {
  text-align: center;
  min-height: 140px;
  margin-top: 30px;
}

.travel-item__img {
  max-width: 80%;
}

img {
  max-width: 200px;
}
</style>
