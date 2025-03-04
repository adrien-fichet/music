import "./assets/fonts/Inter-Light.woff2";
import "./assets/fonts/Inter-LightItalic.woff2";
import "./assets/fonts/Inter-SemiBold.woff2";

import "./assets/scss/app.scss";
import { mount } from "svelte";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app") as HTMLElement
});

export default app;
