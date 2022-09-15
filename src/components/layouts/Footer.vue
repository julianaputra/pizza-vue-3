<template>
  <footer>
    <div class="container py-5 border-top border-bottom">
      <b-row>
        <b-col lg="3" class="mb-5 mb-lg-0">
          <a href="/" class="d-flex mb-5">
            <img
              src="@/assets/logo-alt.svg"
              class="img-fluid"
              alt="Foodnow Logo"
            />
          </a>
          <h4 class="text-primary">Find Us :</h4>
          <a href="#" class="btn btn-outline-primary btn-social">
            <img
              src="@/assets/img/icons/facebook.svg"
              class="contact-icon"
              alt=""
            />
          </a>
          <a href="#" class="btn btn-outline-primary btn-social">
            <img
              src="@/assets/img/icons/instagram.svg"
              class="contact-icon"
              alt=""
            />
          </a>
          <a href="#" class="btn btn-outline-primary btn-social">
            <img
              src="@/assets/img/icons/youtube.svg"
              class="contact-icon"
              alt=""
            />
          </a>
        </b-col>
        <b-col lg="3" class="mb-5 mb-lg-0">
          <h4 class="text-primary">Navigation</h4>
          <b-row>
            <b-col lg="6">
              <a href="#" class="d-block nav-link">Home</a>
              <a href="#" class="d-block nav-link">Order</a>
              <a href="#" class="d-block nav-link">About</a>
              <a href="#" class="d-block nav-link">Blog</a>
            </b-col>
            <b-col lg="6">
              <a href="#" class="d-block nav-link">Contact</a>
              <a href="#" class="d-block nav-link">Login</a>
              <a href="#" class="d-block nav-link">Register</a>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="3" class="mb-5 mb-lg-0">
          <h4 class="text-primary">Contact</h4>
          <ul>
            <li>
              <img
                src="@/assets/img/icons/mail.svg"
                class="contact-icon"
                alt=""
              />
              Food.now@mail.com
            </li>
            <li>
              <img
                src="@/assets/img/icons/phone.svg"
                class="contact-icon"
                alt=""
              />
              +62848477102943
            </li>
            <li>
              <img
                src="@/assets/img/icons/whatsapp.svg"
                class="contact-icon"
                alt=""
              />
              +628184938494
            </li>
          </ul>
        </b-col>
        <b-col lg="3" class="mb-5 mb-lg-0">
          <h4 class="text-primary">Location</h4>
          <ul class="location">
            <li>
              <img
                src="@/assets/img/icons/location.svg"
                class="contact-icon"
                alt=""
              />
              <div>
                <h5>Kerobokan</h5>
                <p>
                  Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec.
                  Kuta Utara, Kabupaten Badung, Bali 80361
                </p>
              </div>
            </li>
          </ul>
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

.btn-social {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  img {
    margin: 0;
  }

  &:hover {
    background-color: rgba($color: $primary, $alpha: 0.3) !important;
  }
}

.contact-icon {
  height: 1.25rem;
  width: 1.25rem;
  object-fit: contain;
  margin-right: 0.5rem;
}

footer {
  font-size: 1.125rem;

  h4 {
    margin-bottom: 1.25rem;
  }

  .nav-link {
    margin-bottom: 0.875rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.875rem;
    }
  }

  .location {
    li {
      align-items: flex-start;
    }
  }
}
</style>
