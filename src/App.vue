<template>
  <layouts-navbar />
  <layouts-header />

  <main>
    <order-form />
  </main>

  <layouts-footer />
</template>

<script>
import LayoutsNavbar from "./components/layouts/Navbar.vue";
import LayoutsFooter from "./components/layouts/Footer.vue";
import LayoutsHeader from "./components/layouts/Header.vue";
import OrderForm from "./components/order/OrderForm.vue";

export default {
  components: {
    LayoutsNavbar,
    LayoutsHeader,
    LayoutsFooter,
    OrderForm,
  },
};
</script>

<style lang="scss"></style>
