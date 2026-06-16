const mount = (el) => {
  const msg = "This is my Pokedex";
  el.innerHTML = msg;
}

if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("pokedex-app-isolation");
  if (elm) {
    // this assumes that an element with ID "pokedex-app-isolation" will only be in pokedex app, and NEVER in container app
    mount(elm);
  }
}

export default mount;
