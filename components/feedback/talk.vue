<template>
  <div
    :class="{'hover:bg-grey-lighter': showChevron}"
    class="bg-white border border-grey-lighter flex p-4 items-center"
  >
    <template v-if="speakers && speakers.length">
      <img
        v-for="(speaker, index) in speakers"
        :key="speaker.id"
        v-tooltip.bottom="`${speaker.fullName}`"
        :src="speaker.picture"
        :class="index !== 0 ? '-ml-8': ''"
        class="rounded-full h-32 border-4 shadow-lg border-white hidden md:flex"
      >
    </template>
    <div class="ml-3 flex flex-col justify-around w-full">
      <h1 class="text-xl mb-2 text-wtm-blue-dark">
        {{ talk.title }}
      </h1>
      <div class="flex flex-col md:flex-row md:justify-between w-full">
        <p class="mb-2 md:mb-0 md:w-1/3 text-wtm-blue-dark">
          <i class="fas fa-map-pin" /> {{ talk.track | track }}
        </p>
        <p class="mb-2 md:mb-0 md:w-1/3 text-wtm-blue-dark">
          <i class="fas fa-clock" /> {{ talk.hour }}
        </p>
        <p
          v-if="talk.speakers && talk.speakers.length"
          class="md:w-1/3 flex md:hidden items-center"
        >
          <img
            v-for="speaker in talk.speakers"
            :key="speaker.id"
            v-tooltip.bottom="`${speaker.name} ${speaker.surname}`"
            :src="speaker.picture"
            class="rounded-full h-12 w-12 border-4 shadow-lg border-white -ml-1"
          >
        </p>
      </div>
    </div>
    <i
      v-if="showChevron"
      class="fas fa-chevron-right text-wtm-blue-dark"
    />
  </div>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  directives: {
    tooltip: VTooltip
  },
  filters: {
    track(track) {
      if (track.includes('1')) {
        return 'Track 1'
      }

      return 'Track 2'
    }
  },
  props: {
    talk: {
      type: Object,
      required: true
    },
    showChevron: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    speakers() {
      if (this.talk.picture) {
        return [
          {
            fullName: this.talk.speakers
              .map(speaker => `${speaker.name} ${speaker.surname}`)
              .join(', '),
            picture: this.talk.picture
          }
        ]
      }

      return this.talk.speakers.map(speaker => {
        return {
          fullName: `${speaker.name} ${speaker.surname}`,
          picture: speaker.picture
        }
      })
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
