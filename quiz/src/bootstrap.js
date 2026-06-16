if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("quiz-app-isolation");
  if (elm) {
    mount(elm);
  }
}

const mount = (el) => {
  const msg = "This is the Pokemon Quiz app!";

  el.innerHTML = msg;
}

export { mount };
