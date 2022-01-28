import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function FadeUp({ children, isVisible }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.2, type: "tween" }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 25 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeUp;
