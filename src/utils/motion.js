export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
//   export const fadeIn = (direction, type, delay, duration) => {
//     return {
//       hidden: {
//         x: direction === "left" ? 0 : direction === "right" ? 0 : 0, // Reduce movement
//         y: direction === "up" ? 0 : direction === "down" ? 0 : 0, // Reduce movement
//         opacity: 0,
//       },
//       show: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: type,
//           delay: delay,
//           duration: duration || 0.7, // Increase duration for smoother effect
//           ease: "easeOut",
//         },
//       },
//     };
//   };
  // src/utils/motion.js or motion.ts

export const fadeIn = (direction, type, delay, duration) => {
    const distance = 20; // Reduced movement distance
  
    return {
      hidden: {
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration, // You can adjust this as needed
          ease: "easeOut",
        },
      },
    };
  };
  
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
  