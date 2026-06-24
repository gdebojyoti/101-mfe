import { useEffect, useRef } from "react";

import { mount } from "profile/index";

const Profile = () => {
  const divRef = useRef(null);

  useEffect(() => {
    mount(divRef.current);
  }, [])

  return (
    <div ref={divRef}></div>
  )
}

export default Profile;