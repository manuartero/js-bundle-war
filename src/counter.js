export function Counter() {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    button.innerHTML = `count is ${counter}`;
  };

  const container = document.createElement("div");
  container.className = "card";
  const button = document.createElement("button");
  button.id = "counter";
  button.type = "button";
  button.addEventListener("click", () => setCounter(counter + 1));

  setCounter(0);

  container.appendChild(button);
  return container;
}
