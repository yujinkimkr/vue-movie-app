import { createApp } from "vue";
import App from "./App";
import router from "./routes/index.js";
import store from "./store/index.js";
// import store from "./store/index.js";
// index라는 이름의 파일은 생략이 가능하다
import loadImage from './plugins/loadImage';

createApp(App)
    .use(router) //$route, $router
    .use(store)   // $store
    .use(loadImage) // $loadImage
    .mount("#app");

