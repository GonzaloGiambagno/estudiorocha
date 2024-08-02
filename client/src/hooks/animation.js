export const fadeUpAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      },
    },
  }

export const fadeOpacity = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1.2]
        },
    },
}
  
export const fadeFromLeftAnimation = {
initial: { opacity: 0, x: 100 },
animate: {
    opacity: 1,
    x: 0,
    transition: {
    duration: 0.5,
    delay: 0.2,
    },
},
}
export const fadeFromRightAnimation = {
initial: { opacity: 0, x: -100 },
animate: {
    opacity: 1,
    x: 0,
    transition: {
    duration: 0.5,
    delay: 0.2,
    },
},
viewPort: { once: true },
}