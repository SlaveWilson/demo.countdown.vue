<template lang="pug">
.container
  p {{ currentTime }}
  .flex.justify-between
    .flex.flex-col.items-center
      p Days
      BaseCard 01
    .flex.flex-col.items-center
      p Hours
      BaseCard 01
    .flex.flex-col.items-center
      p Minuets
      BaseCard 01
    .flex.flex-col.items-center
      p Seconds
      BaseCard 01
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