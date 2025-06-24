import { App } from "./app.js";

import "./style.css";

const app = document.querySelector("#app");
app.innerHTML = "";
app.appendChild(App());
