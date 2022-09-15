<template>
  <nav
    class="navbar fixed-top navbar-dark navbar-expand-lg bg-faded justify-content-center"
    :class="scrollPosition > 50 ? 'bg-dark' : ''"
  >
    <div class="container">
      <a href="/" class="navbar-brand d-flex w-50 me-auto">
        <img src="@/assets/logo.svg" alt="Foodnow Logo" class="img-fluid" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsingNavbar3"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="navbar-nav w-100 justify-content-center">
          <li v-for="(navItem, index) in nav" :key="index" class="nav-item">
            <a class="nav-link" href="#">{{ navItem.label }}</a>
          </li>
        </ul>
        <ul
          class="nav navbar-nav ms-auto w-100 justify-content-end align-items-center"
        >
          <li class="nav-item me-3">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <b-button variant="primary" class="text-white" pill
              >Register</b-button
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LayoutsFooter",
  data() {
    return {
      nav: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Order",
          path: "/",
        },
        {
          label: "About",
          path: "/",
        },
        {
          label: "Blog",
          path: "/",
        },
        {
          label: "Contact Us",
          path: "/",
        },
      ],
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped></style>
