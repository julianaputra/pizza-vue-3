<template>
  <label :for="`pizza-${pizza.id}`" class="pizza-card">
    <b-row>
      <b-col cols="5" lg="12" xl="6" class="text-center">
        <img
          :src="imageUrl(pizza.name)"
          :alt="`${pizza.name} Image`"
          class="pizza-card-image img-fluid"
        />
      </b-col>
      <b-col cols="7" lg="12" xl="6">
        <div class="pizza-card-body mt-lg-3 mt-xl-0">
          <h3 class="h5">
            {{ pizza.name }}
          </h3>
          <div>
            <span>{{ toCurrency(pizza.discount.final_price) }}</span>
            <span class="ms-2 opacity-75" v-if="pizza.discount.is_active">
              <del>{{ toCurrency(pizza.price) }}</del>
            </span>
          </div>
        </div>
      </b-col>
    </b-row>

    <img
      v-if="pizza.discount.is_active"
      class="pizza-card-ribbon"
      src="@/assets/img/ribbon.svg"
      alt="offer-ribbon"
    />
  </label>
</template>

<script>
export default {
  name: "PizzaCard",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageUrl(imageName) {
      return new URL(`../../assets/img/pizza/${imageName}.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-check:checked + .pizza-card {
  background-color: $primary;
  color: $white;
}
.pizza-card {
  position: relative;
  overflow: hidden;
  border-radius: $border-radius;
  border: 1px solid rgba(51, 51, 51, 0.1);
  cursor: pointer;
  z-index: 90;
  display: flex;
  padding: 1.5rem;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  font-size: 1.125rem;
  height: 100%;

  .pizza-card-image {
    transition: transform 0.3s ease-in-out;
    /* width: 100%;
    max-width: 8rem; */
  }

  &:hover {
    background-color: rgba($color: $primary, $alpha: 0.3);
    .pizza-card-image {
      transform: rotate(15deg);
    }
  }

  &-body {
    /* margin-left: 1.5rem; */
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  &-ribbon {
    position: absolute;
    inset: 0 0 auto auto;
    max-height: 60%;
    max-width: 50%;
  }
}

@include media-breakpoint-up(lg) {
  .pizza-card {
    padding: 1rem;
  }
}

@include media-breakpoint-up(xl) {
  .pizza-card {
    padding: 1.5rem;
  }
}
</style>
