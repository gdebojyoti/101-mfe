import { createRoot } from "react-dom/client";

import App from "./components/App";

const mount = (elm) => {
  const root = createRoot(elm);
  // root.render(<h1>Old Profile app</h1>);
  root.render(<App />);
}

if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("_profile-app-root");

  if (elm) {
    mount(elm);
  }
}

export { mount };