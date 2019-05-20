<template>
  <section class="h-screen flex flex-col h-min">
    <header
      :class="{'os-android': isAndroid}"
      class="h-header flex bg-header bg-header2 h-min"
    >
      <div class="flex flex-col items-start mt-8 container">
        <div class="absolute">
          <div class="flex flex-col lg:flex-row lg:items-center justify-center">
            <div class="flex flex-col md:flex-row md:items-center justify-center items-baseline">
              <div class="flex items-center sm:justify-center lg:justify-start">
                <span
                  class="p-1 lg:p-0 mr-2 icon-menu text-wtm-blue-ligth h-full cursor-pointer xl:hidden"
                  @click="showMenu"
                />
                <img
                  class="sm:mr-4 w-3/4 sm:w-5/6"
                  src="img/wtm-tagline-logo-hdr.svg"
                >
              </div>
              <img
                class="mr-4 w-2/6 mt-4 md:mt-0 h-4"
                src="img/gdgasturias-new.png"
              >
            </div>
            <span class="flex items-center mt-4 lg:mt-0">
              <span class="text-wtm-blue-dark mr-2">by</span>
              <img src="img/google-oscuro.svg">
            </span>
          </div>
        </div>
        <div
          :class="{'hidden xl:block': !menu, 'menu cursor-pointer': menu}"
          class="w-full xl:w-auto block text-white xl:text-wtm-blue-dark bg-wtm-blue-ligther xl:bg-transparent mt-0 xl:mt-10"
          @click="hideMenu"
        >
          <div class="text-sm flex items-center justify-center flex-col xl:flex-row h-screen xl:h-auto">
            <a
              v-scroll-to="{ el: '#what-is', onStart: () => hideMenu() }"
              href="#what-is"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >¿QUÉ ES?</a>
            <template v-if="showFeedback">
              <router-link
                to="/feedback"
                class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
              >
                FEEDBACK
              </router-link>
              <router-link
                to="/retos"
                class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
              >
                RETOS
              </router-link>
            </template>
            <a
              v-else
              href="https://entradium.com/es/entradas/women-techmakers-asturias-2019"
              target="_blank"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >ENTRADAS</a>
            <a
              v-scroll-to="{ el: '#schedule', onStart: () => hideMenu() }"
              href="#schedule"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >AGENDA</a>
            <a
              v-scroll-to="{ el: '#speakers', onStart: () => hideMenu() }"
              href="#speakers"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >SPEAKERS</a>
            <a
              v-scroll-to="{ el: '#team', onStart: () => hideMenu() }"
              href="#team"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >EQUIPO</a>
            <a
              v-scroll-to="{ el: '#sponsors', onStart: () => hideMenu() }"
              href="#sponsors"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >PATROCINADORES</a>
            <a
              v-scroll-to="{ el: '#travel', onStart: () => hideMenu() }"
              href="#travel"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >VIAJES</a>
            <a
              v-scroll-to="{ el: '#faq', onStart: () => hideMenu() }"
              href="#faq"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >FAQ</a>
            <a
              href="http://wtm.gdgasturias.com/2018/"
              target="_blank"
              class="block mt-4 no-underline text-white xl:text-wtm-blue-dark text-2xl xl:text-base mr-0 xl:mr-4 font-bold hover:font-bold sm:font-normal hover:text-wtm-blue-dark text-center"
            >WTM'18</a>
          </div>
        </div>
        <div class="flex flex-col justify-center h-full mt-28">
          <h1 class="flex flex-col md:flex-row text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-wtm-blue-dark">
            <span>Women</span>
            <span class="hidden md:block">&nbsp;</span>
            <span>Techmakers</span>
          </h1>
          <h1 class="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-wtm-blue-dark">
            Asturias 2019
          </h1>
          <div class="w-1/6 border border-wtm-green border-t-0 mt-4 mb-4" />
          <h2 class="md:text-2xl font-thin text-wtm-blue-dark">
            6 de abril de 2019
          </h2>
          <div
            v-if="showFeedback"
            class="flex flex-col bg-wtm-green-ligth rounded-lg pt-2 pb-2 pr-2 pl-2 text-xl mt-8 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <router-link
              to="/feedback"
              class="text-wtm-blue-dark font-bold bg-wtm-green rounded-lg p-4 text-center text-xs sm:text-xl md:text-3xl lg:text-3xl no-underline"
            >
              ¡Feedback de las charlas!
            </router-link>
          </div>
          <div
            v-else
            class="flex flex-col bg-wtm-green-ligth rounded-lg pt-2 pb-2 pr-2 pl-2 text-xl mt-8 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <CountdownEvent />
            <a
              href="https://entradium.com/es/entradas/women-techmakers-asturias-2019"
              target="_blank"
              class="text-wtm-blue-dark font-bold bg-wtm-green rounded-lg p-4 text-center text-xs sm:text-xl md:text-3xl lg:text-3xl no-underline"
            >¡HAZTE CON TU ENTRADA!</a>
          </div>
          <p class="mt-4 text-center text-2xs md:text-base lg:text-xl text-wtm-blue-dark">
            No olvides leer
            <a
              href="https://github.com/gdg-asturias/comunidad/blob/master/CODE_OF_CONDUCT.md"
              class="text-2xs md:text-base lg:text-xl text-wtm-blue-dark underline"
            >nuestro código de conducta</a>
          </p>
        </div>
      </div>
    </header>
    <ProgressBar />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import isAndroid from 'is-android'

import CountdownEvent from './CountdownEvent'
import ProgressBar from './ProgressBar'

export default {
  components: {
    CountdownEvent,
    ProgressBar
  },
  data: () => ({ menu: false }),
  created() {
    this.$store.dispatch('config/fetchConfig')
  },
  computed: {
    ...mapGetters('config', ['showFeedback']),
    isAndroid() {
      return isAndroid
    }
  },
  watch: {
    menu: {
      handler(newValue, oldValue) {
        let style = 'margin: 0;'
        if (newValue) {
          style =
            'margin: 0; height: 100%; overflow: hidden; touch-action: none;'
        }

        document.getElementsByTagName('body')[0].style = style
        document.getElementsByTagName('html')[0].style = style
      }
    }
  },
  methods: {
    hideMenu() {
      this.menu = false
    },
    showMenu() {
      this.menu = true
    }
  }
}
</script>

<style lang="scss">
.h-min {
  min-height: 550px;
}
@screen md {
  .h-min {
    min-height: 650px;
  }
}

.h-header {
  height: 90vh !important;
  @supports (-webkit-appearance: none) {
    &.os-android {
      height: calc(90vh - 56px);
    }
  }
}

.bg-header1,
.bg-header2 {
  background-image: url('/img/header-mobile.png'), url('/img/header-02.png');
}

.bg-header {
  background-position: 120px;
  background-size: cover, 0;
  background-repeat: no-repeat;
}

@screen sm {
  .bg-header1 {
    background-image: url('/img/header-01.png'), url('/img/header-02.png');
  }

  .bg-header2 {
    background-image: url('/img/header-01b.png'), url('/img/header-02.png');
  }
  .bg-header {
    background-position: 200px, left 240px;
    background-size: cover, 15vw;
  }
}

@screen md {
  .bg-header {
    background-position: 280px, left 260px;
    background-size: cover, 10vw;
  }
}

@screen lg {
  .bg-header {
    background-position: right, left 250px;
    background-size: contain, 8vw;
  }
}

@screen xl {
  .bg-header {
    background-position: right, left 200px;
    background-size: contain, 10vw;
  }
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>
