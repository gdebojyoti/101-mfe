import { createRoot } from "react-dom/client";
import { memoryLocation } from "wouter/memory-location";

import App from "./components/App";

const mount = (elm) => {
  const root = createRoot(elm);
  const location = memoryLocation()

  root.render(<App location={location} />);
}

if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("_profile-app-root");

  if (elm) {
    mount(elm);
  }
}

export { mount };