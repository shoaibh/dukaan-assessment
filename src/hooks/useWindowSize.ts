import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    // Function to update isSmallScreen when the window is resized
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 950);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};
