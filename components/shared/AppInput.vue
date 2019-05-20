<template>
  <div class="mb-4 w-full pr-2 pl-2">
    <label
      :for="label"
      class="block text-grey-darker text-sm font-bold mb-2"
    >
      {{ label }}
    </label>
    <input
      v-if="!isTextArea"
      :id="label"
      :value="value"
      :type="type"
      v-bind="attrs"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-else
      :id="label"
      :value="value"
      v-bind="attrs"
      rows="4"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [Object, Number, String],
      required: true
    }
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        class: ''
      }
    },
    isTextArea() {
      return this.type === 'textarea'
    }
  }
}
</script>

<style>
</style>
