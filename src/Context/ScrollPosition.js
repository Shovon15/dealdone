import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();
const ScrollPositionProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(scrollPosition);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  // ----------------------width
  const [width, setWidth] = useState(0);
  console.log(width);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("width", updateWidth);

    updateWidth();

    return () => window.removeEventListener("width", updateWidth);
  }, []);

  const authInfo = { scrollPosition, width };
  return (
    <ScrollContext.Provider value={authInfo}>{children}</ScrollContext.Provider>
  );
};

export default ScrollPositionProvider;
