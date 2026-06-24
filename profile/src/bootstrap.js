import { createRoot } from "react-dom/client";
import { memoryLocation } from "wouter/memory-location";

import App from "./components/App";

const mount = (elm, { onNavigate }) => {
  const root = createRoot(elm);

  const location = memoryLocation({
    base: "/profile",
    path: "/"
  });

  location.navigate("/");

  root.render(<App location={location} onNavigate={onNavigate} />);

  return {
    onParentNavigate: (pathname) => {
      console.log("Container just navigated!")
      location.navigate(pathname);
    }
  };
}

if (process.env.NODE_ENV === "development") {
  const elm = document.getElementById("_profile-app-root");

  if (elm) {
    mount(elm);
  }
}

export { mount };