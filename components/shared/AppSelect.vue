<template>
  <div class="mb-4 w-full pr-2 pl-2">
    <label
      :for="label"
      class="block text-grey-darker text-sm font-bold mb-2"
    >
      {{ label }}
    </label>
    <div
      v-if="!isMultiple"
      class="relative"
    >
      <select
        :id="label"
        :value="value"
        v-bind="attrs"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        @input="onInput"
      >
        <slot />
      </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
    <multiselect
      v-else
      :id="label"
      :value="multipleValues"
      :options="options"
      v-bind="attrs"
      @input="onInput"
    >
      <template
        slot="option"
        slot-scope="props"
      >
        <slot :props="props" />
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Object, Number, String, Array],
      required: true
    },
    options: {
      type: [Array],
      default: () => []
    }
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        class: ''
      }
    },
    isMultiple() {
      return Object.keys(this.$attrs).indexOf('multiple') !== -1
    },
    multipleValues() {
      if (!this.value) {
        return []
      }

      return this.options.filter(option => this.value.indexOf(option.id) !== -1)
    }
  },
  methods: {
    onInput(event) {
      if (this.isMultiple) {
        const ids = event.map(({ id }) => id)
        return this.$emit('input', ids)
      }

      return this.$emit('input', event.target.value)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
