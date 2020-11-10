<template lang="pug" functional>
.container
  .flex.justify-between
    .countdown-box
      BaseCard {{ daysText }}
      p Days
    .countdown-box
      BaseCard {{ hoursText }}
      p Hours
    .countdown-box
      BaseCard {{ minutesText }}
      p Minutes
    .countdown-box
      BaseCard {{ secondsText }}
      p Seconds
</template>

<script>
import { ref, computed, onBeforeUnmount } from "vue";

import BaseCard from "@/components/common/BaseCard";
export default {
  components: {
    BaseCard,
  },
  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const daysText = computed(() => days.value);
    const hoursText = computed(() => {
      const _hours = hours.value;
      if (_hours < 10) return "0" + _hours;
      return _hours;
    });
    const minutesText = computed(() => {
      const _minutes = minutes.value;
      if (_minutes < 10) return "0" + _minutes;
      return _minutes;
    });
    const secondsText = computed(() => {
      const _seconds = seconds.value;
      if (_seconds < 10) return "0" + _seconds;
      return _seconds;
    });

    function updateCountdown() {
      const currentTime = new Date();
      const targetTime = new Date(2021, 0, 0, 0, 0, 0, 0);
      const diff = targetTime - currentTime;
      let remainder = Math.round(diff / 1000);

      days.value = Math.floor(remainder / 60 / 60 / 24);
      remainder %= 60 * 60 * 24;
      hours.value = Math.floor(remainder / 60 / 60);
      remainder %= 60 * 60;
      minutes.value = Math.floor(remainder / 60);
      remainder %= 60;
      seconds.value = Math.floor(remainder);
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    onBeforeUnmount(() => {
      clearInterval(updateCountdown);
    });

    return { daysText, hoursText, minutesText, secondsText };
  },
};
</script>

<style lang="scss" scoped>
.countdown-box {
  text-align: center;
  font-size: 1.3rem;
}
</style>