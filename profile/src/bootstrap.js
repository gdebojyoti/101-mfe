import { createRoot } from "react-dom/client";

const mount = (elm) => {
  const root = createRoot(elm);
  root.render(<h1>I got in!</h1>);
}

if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("_profile-app-root");

  if (elm) {
    mount(elm);
  }
}

export { mount };