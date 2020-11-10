<template lang="pug">
h1 2021 New Year Eve
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


<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.1);

  height: 100vh;
  width: 100vw;

  > * + * {
    margin-top: 2rem;
  }
}
</style>
