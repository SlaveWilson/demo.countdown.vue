<template lang="pug">
h1 2021 Countdown
CountDown
</template>

<script>
import { defineAsyncComponent } from "vue";
const CountDown = defineAsyncComponent(() => import("./components/CountDown"));

export default {
  name: "App",
  components: {
    CountDown,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
