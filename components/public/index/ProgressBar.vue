<template>
  <div>
    <ol class="ProgressBar">
      <li
        :class="{'is-complete': isComplete(0), 'is-current': isCurrent(0)}"
        class="ProgressBar-step"
      >
        <svg class="ProgressBar-icon">
          <use xlink:href="#checkmark-bold" />
        </svg>
        <span class="ProgressBar-stepLabel hidden-on-mobile">31 diciembre<br><strong>Inicio Call for Talks</strong></span>
        <span class="ProgressBar-stepLabel show-on-mobile">31 dic.<br><strong>Inicio C4T</strong></span>
      </li>
      <li
        :class="{'is-complete': isComplete(1), 'is-current': isCurrent(1)}"
        class="ProgressBar-step"
      >
        <svg class="ProgressBar-icon">
          <use xlink:href="#checkmark-bold" />
        </svg>
        <span class="ProgressBar-stepLabel hidden-on-mobile">11 febrero<br><strong>Cierre Call for Talks</strong></span>
        <span class="ProgressBar-stepLabel show-on-mobile">11 feb.<br><strong>Cierre C4T</strong></span>
      </li>
      <li
        :class="{'is-complete': isComplete(2), 'is-current': isCurrent(2)}"
        class="ProgressBar-step"
      >
        <svg class="ProgressBar-icon">
          <use xlink:href="#checkmark-bold" /></svg>
        <span class="ProgressBar-stepLabel hidden-on-mobile">20 febrero<br><strong>Ponentes</strong></span>
        <span class="ProgressBar-stepLabel show-on-mobile">20 feb.<br><strong>Ponentes</strong></span>
      </li>
      <li
        :class="{'is-complete': isComplete(3), 'is-current': isCurrent(3)}"
        class="ProgressBar-step"
      >
        <svg class="ProgressBar-icon">
          <use xlink:href="#checkmark-bold" /></svg>
        <span class="ProgressBar-stepLabel hidden-on-mobile">04 marzo<br><strong>Entradas</strong></span>
        <span class="ProgressBar-stepLabel show-on-mobile">04 mar.<br><strong>Entradas</strong></span>
      </li>
      <li
        :class="{'is-complete': isComplete(4), 'is-current': isCurrent(4)}"
        class="ProgressBar-step"
      >
        <svg class="ProgressBar-icon">
          <use xlink:href="#checkmark-bold" />
        </svg>
        <span class="ProgressBar-stepLabel hidden-on-mobile">6 de abril<br><strong class="hidden lg:block">#WTMAsturias2019</strong><strong class="block lg:hidden">#WTM2019</strong></span>
        <span class="ProgressBar-stepLabel show-on-mobile">6 de abr.<br><strong>WTM</strong></span>
      </li>
    </ol>
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol
        id="checkmark-bold"
        viewBox="0 0 24 24"
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </symbol>
    </svg>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      dates: [
        moment('12-31-2018', 'MM-DD-YYYY'),
        moment('02-11-2019', 'MM-DD-YYYY'),
        moment('02-20-2019', 'MM-DD-YYYY'),
        moment('03-04-2019', 'MM-DD-YYYY'),
        moment('04-06-2019', 'MM-DD-YYYY')
      ]
    }
  },
  methods: {
    isCurrent(step) {
      if (step === 0) {
        return true
      }

      const prev = this.dates[step - 1]
      const act = this.dates[step]
      const now = moment(Date.now())

      return (
        (now.isBefore(act, 'days') && now.isAfter(prev, 'days')) ||
        now.diff(act, 'days') === 0
      )
    },
    isComplete(step) {
      if (step === 0) {
        return true
      }

      const act = this.dates[step]
      const now = moment(Date.now())

      return now.isAfter(act, 'days') || now.diff(act, 'days') === 0
    }
  }
}
</script>


<style lang="scss">
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;

$gray: #9f9fa3;
$blue: #002d63;
$white: #dbf1ff;

.hidden-on-mobile {
  @media (max-width: map-get($grid-breakpoints, sm)) {
    display: none !important;
  }
}

.show-on-mobile {
  font-size: 10px !important;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    display: none !important;
  }
}

.ProgressBar {
  margin-top: -42px;
  margin-bottom: -145px;
  padding: 2em 0 3em;
  list-style: none;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.ProgressBar-step {
  text-align: center;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 0.5em;
    background-color: $gray;
    position: absolute;
    z-index: 1;
    width: 100%;
    left: -50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s ease-out;
  }

  &:first-child:before,
  &:first-child:after {
    display: none;
  }

  &:after {
    background-color: $blue;
    width: 0%;
  }

  &.is-complete + &.is-current:after,
  &.is-complete + &.is-complete:after {
    width: 100%;
  }
}

.ProgressBar-icon {
  width: 1.5em;
  height: 1.5em;
  background-color: $gray;
  fill: $gray;
  border-radius: 50%;
  padding: 0.5em;
  max-width: 100%;
  z-index: 10;
  position: relative;
  transition: all 0.25s ease-out;

  .is-current & {
    fill: $blue;
    background-color: $blue;
  }

  .is-complete & {
    fill: $white;
    background-color: $blue;
  }
}

.ProgressBar-stepLabel {
  display: block;
  text-transform: uppercase;
  color: $gray;
  position: absolute;
  padding-top: 0.5em;
  width: 100%;
  transition: all 0.25s ease-out;

  //Add your breakpoint to turn off
  //the labels when you need it.

  .is-current > &,
  .is-complete > & {
    color: $blue;
  }
}
</style>
