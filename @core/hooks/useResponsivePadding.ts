import { useEffect, useState } from "react";

const useResponsivePadding = (padding?: string) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 1024);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getTopValue = (value?: string) => {
    if (!value) return "6rem";

    // ✅ Special case
    if (value === "0rem"  || value === "2rem" || value === "1rem" || value === "0") {
      return isMobile ? "6rem" : "0rem";
    }

    return value;
  };

  const getBottomValue = (
    value?: string,
    fallbackDesktop = "6rem",
    fallbackMobile = "3rem",
  ) => {
    if (!value) return isMobile ? fallbackMobile : fallbackDesktop;

    const num = parseFloat(value);
    const unit = value.replace(num.toString(), "") || "rem";

    return isMobile ? `${num / 2}${unit}` : value;
  };

  const [top, bottom] = padding?.split(",") || [];

  return {
    paddingTop: getTopValue(top), // ✅ always full
    paddingBottom: getBottomValue(bottom), // ✅ only this is responsive
  };
};

export default useResponsivePadding;
