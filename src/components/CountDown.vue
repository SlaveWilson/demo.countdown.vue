<template lang="pug">
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
import BaseCard from "@/components/common/BaseCard";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  computed: {
    daysText() {
      return this.days;
    },
    hoursText() {
      const hours = this.hours;
      if (hours < 10) return "0" + hours;
      return hours;
    },
    minutesText() {
      const minutes = this.minutes;
      if (minutes < 10) return "0" + minutes;
      return minutes;
    },
    secondsText() {
      const seconds = this.seconds;
      if (seconds < 10) return "0" + seconds;
      return seconds;
    },
  },
  created() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.updateCountdown);
  },
  methods: {
    updateCountdown() {
      const currentTime = new Date();
      const targetTime = new Date(2021, 0, 0, 0, 0, 0, 0);
      const diff = targetTime - currentTime;
      let remainder = Math.round(diff / 1000);

      this.days = Math.floor(remainder / 60 / 60 / 24);
      remainder %= 60 * 60 * 24;
      this.hours = Math.floor(remainder / 60 / 60);
      remainder %= 60 * 60;
      this.minutes = Math.floor(remainder / 60);
      remainder %= 60;
      this.seconds = Math.floor(remainder);
    },
  },
};
</script>

<style lang="scss" scoped>
.countdown-box {
  text-align: center;
}
</style>