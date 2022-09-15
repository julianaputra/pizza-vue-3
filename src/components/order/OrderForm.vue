<template>
  <div class="order-form">
    <b-container>
      <b-row>
        <b-col lg="9">
          <div>
            <section>
              <h2 class="h2 text-primary">Choose your pizza</h2>
              <b-row>
                <b-col
                  v-for="pizza in pizzaData"
                  :key="pizza.id"
                  lg="4"
                  class="pb-3"
                >
                  <input
                    type="radio"
                    :id="`pizza-${pizza.id}`"
                    :value="pizza"
                    class="btn-check"
                    v-model="form.pizza"
                    @change="selectPizza"
                  />
                  <pizza-card :pizza="pizza" />
                </b-col>
              </b-row>
            </section>
            <h2 class="h2 text-primary">Custom your pizza</h2>
            <!-- Size -->
            <h3 class="h4">Size</h3>
            <div
              class="form-check size-list"
              v-for="size in sizeData"
              :key="size.id"
            >
              <input
                type="radio"
                class="form-check-input"
                :id="`size-${size.id}`"
                :value="size"
                v-model="form.size"
                :disabled="!form.pizza.id"
              />
              <label class="form-check-label" :for="`size-${size.id}`">
                {{ size.name }}
                <span class="text-muted" v-if="size.extra_price > 0">
                  (+ {{ toCurrency(size.extra_price) }})
                </span>
              </label>
            </div>

            <!-- Toppings -->
            <h3 class="h4 mt-4">Toppings</h3>
            <b-row>
              <b-col
                cols="6"
                md="4"
                lg="3"
                xl="2"
                v-for="topping in toppingData"
                class="mb-4"
                :key="topping.id"
              >
                <input
                  type="checkbox"
                  class="btn-check"
                  :id="`topping-${topping.name}`"
                  autocomplete="off"
                  v-model="form.toppings"
                  :value="topping"
                  :disabled="!form.pizza.toppings.includes(topping.id)"
                />
                <label
                  class="btn d-block btn-outline-primary rounded-pill btn-topping px-1"
                  :for="`topping-${topping.name}`"
                >
                  {{ topping.name }}
                </label>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col lg="3">
          <div class="order-invoice">
            <!-- <b-row>
              <b-col>Pizza</b-col>
              <b-col v-if="form.pizza.id">{{ form.pizza.name }}</b-col>
            </b-row>
            <b-row>
              <b-col>Size</b-col>
              <b-col v-if="form.size.id">{{ form.size.name }}</b-col>
            </b-row>
            <b-row>
              <b-col>Toppings</b-col>
              <b-col v-if="form.pizza.id">{{ form.pizza.name }}</b-col>
            </b-row> -->
            <h2 class="h3 font-weight-normal">Total Price</h2>
            <h3 class="h2 text-primary">
              {{ toCurrency(countTotalPrice) }}
            </h3>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PizzaCard from "@/components/order/PizzaCard.vue";
// json data
import pizzaList from "@/assets/json/pizza-list.json";
import sizeList from "@/assets/json/size-list.json";
import toppingList from "@/assets/json/topping-list.json";
export default {
  name: "OrderForm",
  components: {
    PizzaCard,
  },
  data() {
    return {
      pizzaData: pizzaList.data,
      sizeData: sizeList.data,
      toppingData: toppingList.data,

      form: {
        pizza: {
          toppings: [],
        },
        size: {},
        toppings: [],
      },
    };
  },
  computed: {
    countTotalPrice() {
      let total = 0;

      if (this.form.pizza.id) {
        total += this.form.pizza.discount.final_price;
      }

      if (this.form.size.id) {
        total += this.form.size.extra_price;
      }

      if (this.form.toppings.length) {
        let toppingPrice = 0;

        this.form.toppings.forEach((topping) => {
          toppingPrice += topping.price;
        });

        total += toppingPrice;
      }

      return total;
    },
  },
  methods: {
    selectPizza() {
      const pizza = this.form.pizza;

      if (this.form.toppings.length) {
        const newArray = [];

        this.form.toppings.forEach((selectedTopping) => {
          if (pizza.toppings.includes(selectedTopping.id)) {
            newArray.push(selectedTopping);
          }
        });

        this.form.toppings = newArray;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-form {
  margin: 8.875rem 0;

  .h2 {
    margin-bottom: 2.25rem;
  }

  .h4 {
    margin-bottom: 1.25rem;
  }

  section {
    margin-bottom: 6.875rem;
  }
}

.order-invoice {
  margin-top: 2rem;
  @include media-breakpoint-up(lg) {
    border-left: 1px solid $border-color;
    height: 100%;
    padding-left: 3rem;
  }
}

.btn-topping {
  border-color: rgba(51, 51, 51, 0.5);
  color: $black;

  &:hover {
    color: $primary;
    border-color: $primary;
  }
}

.btn-check[disabled] + .btn,
.btn-check:disabled + .btn {
  background-color: #e3e3e3;
  border-color: #e3e3e3;
  color: #919191;
}

.size-list {
  display: block;
  @include media-breakpoint-up(lg) {
    display: inline-block;
    margin-right: 2rem;
  }
}

.btn-check:checked + .btn {
  color: $primary;
  background-color: rgba($color: $primary, $alpha: 0.3);
}
</style>
