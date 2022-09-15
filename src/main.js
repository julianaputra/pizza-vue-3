import { createApp } from "vue";
import { createPinia } from "pinia";
import { BootstrapVue3 } from "bootstrap-vue-3";
import global from "./mixins/global";
import App from "./App.vue";
import "./assets/scss/style.scss";

const app = createApp(App);

app.mixin(global);

app.use(createPinia());
app.use(BootstrapVue3);

app.mount("#app");
