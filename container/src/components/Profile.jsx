import { useEffect, useRef } from "react";
import { useLocation } from "wouter"

import { mount } from "profile/index";

const Profile = () => {
  const divRef = useRef(null);
  const navigateRef = useRef(null);
  const [pathname, navigate] = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(divRef.current, {
      onNavigate: (nextPathname) => {
        console.log("Container noticed a route change in Profile app", nextPathname);

        if (pathname !== ("/profile" + nextPathname) && nextPathname !== "~/") {
          navigate("/profile" + nextPathname);
        }
      }
    });

    onParentNavigate(pathname);
  }, [])

  return (
    <div ref={divRef}></div>
  )
}

export default Profile;