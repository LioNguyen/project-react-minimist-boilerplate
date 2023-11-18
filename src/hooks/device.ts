import { Hooks } from "react-minimist-utils";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = Hooks.useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 550);
    setIsTablet(width > 550 && width <= 850);
  }, [width]);

  return { isMobile, isTablet };
};
