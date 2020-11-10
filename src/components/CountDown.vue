<template lang="pug">
.container
  .flex.justify-between
    .countdown-box
      BaseCard 1
      p Days
    .countdown-box
      BaseCard 1
      p Hours
    .countdown-box
      BaseCard 1
      p Minuets
    .countdown-box
      BaseCard 1
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
      currentTime: null,
    };
  },
  created() {
    this.currentTime = new Date();
  },
};
</script>

<style lang="scss" scoped>
.countdown-box {
  text-align: center;
}
</style>