<template>
  <router-link
    :to="`/admin/speakers/${item.id}`"
    tag="div"
    class="news-item bg-white border border-grey-lighter flex p-4 hover:bg-grey-lighter"
  >
    <img
      :src="item.picture"
      class="w-16 h-16 rounded-full"
    >
    <div class="ml-3 flex flex-col justify-around">
      <p>👉🏻 {{ item.name }} {{ item.surname }}</p>
      <p>💼 {{ item.work }}</p>
      <p v-if="item.talk">
        📝 {{ item.talk.title }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
