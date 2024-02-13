import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import "./assets/main.css";
import "@/store/pokemon.store";


const app = createApp(App);

// app.use(VueQueryPlugin);

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120, //! 2 minutos
        refetchOnReconnect: "always",
      },
    },
  },
});

app.use(router);

app.mount("#app");
