<template lang="pug" functional>
.card
  slot
</template>

<style lang="scss" scoped>
.card {
  font-size: 6rem;
  font-weight: bold;
  line-height: 1;
  margin: 0 2rem;

  @include sm {
    font-size: 4.5rem;
    margin: 0 1rem;
  }
}
</style>
