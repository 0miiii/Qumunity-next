import { useEffect } from "react";

export const useScrollTop = () => {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);
};
