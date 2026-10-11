// "use client";
// import { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

// const useIsMobile = (breakpoint = 756) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

//     const handleChange = () => {
//       setIsMobile(mediaQuery.matches);
//     };

//     // set initial value
//     handleChange();

//     mediaQuery.addEventListener('change', handleChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleChange);
//     };
//   }, [breakpoint]);

//   return isMobile;
// };

// export default useIsMobile;

// "use client";
// import { useEffect, useState } from 'react';

// const useIsMobile = (breakpoint = 756) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

//     const handleChange = () => {
//       setIsMobile(mediaQuery.matches);
//     };

//     // set initial value
//     handleChange();

//     mediaQuery.addEventListener('change', handleChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleChange);
//     };
//   }, [breakpoint]);

//   return isMobile;
// };

// export default useDeviceType;

const useDeviceType = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: 640px)`);
    const tabletQuery = window.matchMedia(
      `(min-width: 641px) and (max-width: 1024px)`,
    );
    const desktopQuery = window.matchMedia(`(min-width: 1025px)`);

    const updateDevice = () => {
      setDevice({
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isDesktop: desktopQuery.matches,
      });
    };

    updateDevice();

    mobileQuery.addEventListener("change", updateDevice);
    tabletQuery.addEventListener("change", updateDevice);
    desktopQuery.addEventListener("change", updateDevice);

    return () => {
      mobileQuery.removeEventListener("change", updateDevice);
      tabletQuery.removeEventListener("change", updateDevice);
      desktopQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  return device;
};

export default useDeviceType;
