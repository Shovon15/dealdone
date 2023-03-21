import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();
const ScrollPositionProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const authInfo = { scrollPosition };
  return (
    <ScrollContext.Provider value={authInfo}>{children}</ScrollContext.Provider>
  );
};

export default ScrollPositionProvider;
