import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./counter.js";
import { LogoLink } from "./logo-link.js";

export function App() {
  const container = document.createElement("main");

  const viteLink = LogoLink({
    href: "https://vite.dev",
    className: "logo",
    alt: "Vite logo",
    imgSrc: viteLogo,
  });

  const jsLink = LogoLink({
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    className: "logo vanilla",
    alt: "JavaScript logo",
    imgSrc: javascriptLogo,
  });

  const heading = document.createElement("h1");
  heading.textContent = "Hello Vite!";

  const counter = Counter();

  const p = document.createElement("p");
  p.className = "read-the-docs";
  p.textContent = "Click on the Vite logo to learn more";

  container.appendChild(viteLink);
  container.appendChild(jsLink);
  container.appendChild(heading);
  container.appendChild(counter);
  container.appendChild(p);

  return container;
}
