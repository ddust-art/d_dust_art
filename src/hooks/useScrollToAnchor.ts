import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToAnchor() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      //delay ensures DOM is ready after route change (allows painting screen first)
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [hash, pathname]);
}
