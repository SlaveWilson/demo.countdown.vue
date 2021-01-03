<template lang="pug">
.overlay.space-y-8 
  h1 {{year}} New Year Eve
  CountDown
</template>

<script>
import { defineAsyncComponent } from "vue";
import useDate from "@/hooks/date";
const CountDown = defineAsyncComponent(() => import("./components/CountDown"));

export default {
  name: "App",
  components: {
    CountDown,
  },
  setup() {
    const { year } = useDate();
    document.title = `${year.value} Countdown Timer`;
    return { year };
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

  background-color: rgba(0, 0, 0, 0.1);
}
</style>
