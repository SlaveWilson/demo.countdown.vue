<template lang="pug">
.card.flex.justify-center.items-center.rounded.shadow
  slot
</template>

<style lang="scss" scoped>
.card {
  background: black;
  color: white;
  width: 50px;
  height: 75px;

  font-size: 30px;
}
</style>