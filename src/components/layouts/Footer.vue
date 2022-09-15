<template>
  <footer>
    <div class="container py-5 border-top border-bottom">
      <b-row>
        <b-col lg="3">
          <a href="/" class="d-flex w-50 mb-5">
            <img
              src="@/assets/logo-alt.svg"
              class="img-fluid"
              alt="Foodnow Logo"
            />
          </a>
          <h4 class="text-primary">Find Us :</h4>
        </b-col>
        <b-col lg="3">
          <h4 class="text-primary">Navigation</h4>
        </b-col>
        <b-col lg="3">
          <h4 class="text-primary">Contact</h4>
        </b-col>
        <b-col lg="3">
          <h4 class="text-primary">Location</h4>
        </b-col>
      </b-row>
    </div>
    <div class="container py-3">
      <p class="copyright">
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor
        Indonesia. | Privacy Policy This site is protected by reCAPTCHA and the
        Google Privacy Policy and Terms of Service apply.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "LayoutsFooter",
};
</script>

<style lang="scss" scoped>
.copyright {
  text-align: center;
  max-width: 48.5rem;
  margin: auto;
}
</style>
