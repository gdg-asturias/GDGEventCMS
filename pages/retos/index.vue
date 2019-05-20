<template>
  <div class="md:container">
    <div class="bg-white flex-col border border-grey-lighter flex p-4 mb-4">
      <p class="mb-4">
        Una vez los hayas completado y publicado en redes sociales, busca a la persona del equipo de GDG Asturias encargada de los retos para que lo valide. En el cierre del evento repartiremos los regalos. Tenemos muchos, ¡no te queden sin el tuyo!
      </p>
      <p>
        *Aseguráte de etiquetar los retos con #WTMAsturias hashtag y así podremos encontrar tus publicaciones.
      </p>
    </div>
    <div
      v-for="(challenge, index) in randomChallenges"
      :key="index"
      class="cursor-pointer"
    >
      <Challenge :challenge="challenge" />
    </div>
  </div>
</template>

<script>
import shuffle from 'shuffle-array'

import Challenge from '~/components/retos/Challenge.vue'
import { mapState } from 'vuex'

export default {
  layout: 'feedback',
  head: {
    title: 'Retos | WTM Asturias 2019'
  },
  components: {
    Challenge
  },
  computed: {
    ...mapState('challenges', ['challenges']),
    randomChallenges() {
      return shuffle(this.challenges)
    }
  },
  fetch({ store }) {
    return store.dispatch('challenges/fetchChallenges')
  }
}
</script>

<style>
</style>
