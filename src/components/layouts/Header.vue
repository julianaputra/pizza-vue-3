<template>
  <header class="hero">
    <b-container>
      <h1>Pizza Order</h1>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "LayoutsHeader",
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/img/hero.png");
  background-size: cover;
  background-position: center;
  padding: 16.875rem 0;
  text-align: center;

  h1 {
    color: $primary;
  }
}
</style>
