<template lang="pug">
.container
  .flex.justify-between
    .countdown-box
      BaseCard {{ days }}
      p Days
    .countdown-box
      BaseCard {{ hours }}
      p Hours
    .countdown-box
      BaseCard {{ minutes }}
      p Minutes
    .countdown-box
      BaseCard {{ seconds }}
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
  created() {
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
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