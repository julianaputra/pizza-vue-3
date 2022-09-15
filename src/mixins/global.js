export default {
  methods: {
    toCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(value);
    },
  },
};
