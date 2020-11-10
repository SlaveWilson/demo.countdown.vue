<template lang="pug" functional>
.flex.justify-center.countdown-container
  .countdown-box
    BaseCard {{ days }}
    p Days
  .countdown-box
    BaseCard {{ formatTime(hours) }}
    p Hours
  .countdown-box
    BaseCard {{ formatTime(minutes) }}
    p Minutes
  .countdown-box
    BaseCard {{ formatTime(seconds) }}
    p Seconds
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

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

    function formatTime(time) {
      const _time = time;
      if (_time < 10) return "0" + _time;
      return _time;
    }

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

    return {
      days,
      hours,
      minutes,
      seconds,
      formatTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.countdown-container {
  flex-wrap: wrap;
}
.countdown-box {
  text-align: center;
  font-size: 1.3rem;
}
</style>