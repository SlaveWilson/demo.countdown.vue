<template lang="pug">
.overlay
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
  background-image: url("./assets/images/sunset.jpg");
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
}

.overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  min-width: 100%;

  > * + * {
    margin-top: 2rem;
  }

  background-color: rgba(0, 0, 0, 0.1);
}
</style>
