import "./assets/Inter-Light.woff2"
import "./assets/Inter-LightItalic.woff2"
import "./assets/Inter-SemiBold.woff2"

import "./assets/app.scss"
import { mount } from "svelte"
import App from "./App.svelte"

const app = mount(App, {
  target: document.getElementById("app") as HTMLElement,
})

export default app
