import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import TaskBoard from "./task_board";
import SpotlightButton from "./button";

export default function TaskHeading() {
  // Motion values for blob positions, start centered-ish
  const blob1X = useMotionValue(0);
  const blob1Y = useMotionValue(0);
  const blob2X = useMotionValue(0);
  const blob2Y = useMotionValue(0);

  // Spring configs for smooth movement
  const springConfig = { stiffness: 100, damping: 20 };

  // Create smooth springs from motion values
  const springBlob1X = useSpring(blob1X, springConfig);
  const springBlob1Y = useSpring(blob1Y, springConfig);
  const springBlob2X = useSpring(blob2X, springConfig);
  const springBlob2Y = useSpring(blob2Y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Move blob1 slightly offset from cursor (follow smoothly)
    blob1X.set(clientX - 200);
    blob1Y.set(clientY - 200);

    // Blob2 moves slower and more offset
    blob2X.set(clientX - 300);
    blob2Y.set(clientY - 150);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-neutral-900 text-white flex flex-col items-center justify-center py-[50vh] px-6 md:px-12"
    >
      {/* Interactive Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-500 opacity-30 blur-3xl"
        style={{
          top: springBlob1Y,
          left: springBlob1X,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"
        style={{
          top: springBlob2Y,
          left: springBlob2X,
        }}
        animate={{
          scale: [1.1, 1.3, 1.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Heading */}
      <motion.h1
        className="relative max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl font-bold z-10 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        How We Let You See About the Progress of Project
      </motion.h1>

      {/* TaskBoard placed outside h1 for valid HTML */}
      <div className="relative z-10 mt-12 w-full max-w-6xl">
        <TaskBoard />
        <SpotlightButton label={"Start Your Project"} to={"/contact"} />
      </div>
    </section>
  );
}
