<template>
  <section class=" flex flex-col">
    <header class="flex bg-header bg-header-feedback">
      <div class="flex flex-col items-start p-4 container">
        <div class="flex flex-col sm:flex-row sm:items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <router-link
              to="/feedback"
              class="mr-4 text-wtm-blue-dark no-underline text-xs sm:text-base flex justity-center"
            >
              <template v-if="datailRoute">
                <i class="fas fa-chevron-left" />
                <span class="ml-2">
                  Volver
                </span>
              </template>
            </router-link>
            <div class="flex items-center sm:justify-center lg:justify-start">
              <img
                class="sm:mr-4 w-3/4 sm:w-5/6"
                src="/img/wtm-tagline-logo-hdr.svg"
              >
            </div>
            <img
              class="mr-4 w-2/6 h-2 sm:h-3"
              src="/img/gdgasturias-new.png"
            >
          </div>
          <span class="flex items-center mt-4 ml-4 md:ml-0 md:mt-0">
            <span class="text-wtm-blue-dark mr-2 text-xs md:text-base">by</span>
            <img
              class="h-3 md:h-auto"
              src="/img/google-oscuro.svg"
            >
          </span>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  computed: {
    datailRoute() {
      return this.$route.name.includes('id')
    }
  }
}
</script>

<style lang="scss">
.h-min {
  min-height: 550px;
}

.bg-header-feedback {
  background-image: url('/img/header-mobile.png');
  background-position: right;
  background-size: 0;
  background-repeat: no-repeat;
}

@screen md {
  .h-min {
    min-height: 650px;
  }
  .bg-header-feedback {
    background-position: right;
    background-size: 400px;
    background-repeat: no-repeat;
  }
}

@screen sm {
  .bg-header-feedback {
    background-position: right;
    background-size: 200px;
    background-repeat: no-repeat;
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

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>
