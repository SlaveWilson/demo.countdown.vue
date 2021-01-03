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
import { onBeforeUnmount } from "vue";
import BaseCard from "@/components/common/BaseCard";
import useDate from "@/hooks/date";

export default {
  components: {
    BaseCard,
  },
  setup() {
    const { days, hours, minutes, seconds, formatTime, updateCountdown } = useDate();

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
