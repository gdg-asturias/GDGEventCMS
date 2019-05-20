<template>
  <div
    id="where-is"
    class="where-is"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section__title">
            ¿Dónde es?
          </h2>
        </div>
        <div class="col-sm-12">
          <p class="section__paragraph">
            En la Escuela Politécnica de Gijón, Aulario Sur - Aula Magna
          </p>
          <p class="section__paragraph">
            <a href="http://www.epigijon.uniovi.es/index.php/2013-04-12-11-25-23/localizacion">
              Información de cómo llegar
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="map-container">
      <googlemaps-map
        ref="map"
        :center="eventLocation"
        :zoom="zoom"
        class="map-container__map"
      >
        <googlemaps-marker
          :title="'WTM'"
          :label="'WTM'"
          :position="eventLocation"
        />
      </googlemaps-map>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyBwVGsVCnxkcSXQyfjQcjl-14XgQ_zwxLU',
    libraries: ['places']
  }
})

export default {
  name: 'WhereIs',
  data() {
    return {
      eventLocation: {
        lat: 43.523,
        lng: -5.625
      },
      zoom: 16
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.where-is {
  padding-top: 60px;
}
.map-container {
  margin: 0;
  padding: 0;
  height: 50vh;
  display: flex;
  flex-direction: column;
}

.map-container__map {
  flex: 100% 1 1;
}
</style>
