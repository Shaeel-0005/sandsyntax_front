import React, { useRef, useEffect } from "react";
import { hero_bg, float1, float2, float3 } from "../assets";
import SpotlightButton from "../components/button";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const lightRadius = 250; // torch light radius
    const maxRadius = 500; // maximum gradient radius

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      // Allow mouse to go anywhere for natural interaction
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Gentle idle movement when mouse is stationary
      const idleX = Math.sin(time * 0.3) * 5;
      const idleY = Math.cos(time * 0.4) * 5;

      // Smooth follow mouse position with idle movement
      mouse.current.x += (target.current.x + idleX - mouse.current.x) * 0.08;
      mouse.current.y += (target.current.y + idleY - mouse.current.y) * 0.08;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create VERY dark overlay - almost black
      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      ctx.fillRect(0, 0, width, height);

      // Create torch light "hole" using destination-out to cut through darkness
      ctx.globalCompositeOperation = "destination-out";

      // Add flickering effect
      const flicker =
        0.95 + Math.sin(time * 8) * 0.05 + Math.sin(time * 20) * 0.03;

      // Main bright torch light area
      const lightGradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        lightRadius
      );

      lightGradient.addColorStop(0, `rgba(255, 255, 255, ${1.0 * flicker})`); // Completely transparent center
      lightGradient.addColorStop(0.3, `rgba(255, 255, 255, ${0.9 * flicker})`); // Very transparent
      lightGradient.addColorStop(0.6, `rgba(255, 255, 255, ${0.6 * flicker})`); // Semi-transparent
      lightGradient.addColorStop(0.8, `rgba(255, 255, 255, ${0.2 * flicker})`); // Barely transparent
      lightGradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // No transparency (stays dark)

      ctx.fillStyle = lightGradient;
      ctx.fillRect(0, 0, width, height);

      // Add softer outer glow
      const outerGradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        lightRadius * 0.7,
        mouse.current.x,
        mouse.current.y,
        maxRadius
      );

      outerGradient.addColorStop(0, `rgba(255, 255, 255, ${0.4 * flicker})`);
      outerGradient.addColorStop(0.5, `rgba(255, 255, 255, ${0.2 * flicker})`);
      outerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = outerGradient;
      ctx.fillRect(0, 0, width, height);

      // Reset blending mode
      ctx.globalCompositeOperation = "source-over";
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="relative p-0 w-full h-screen overflow-hidden">
        {/* Background image with enhanced styling */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${hero_bg})`,
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />

        {/* Torch effect canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Floating images with torch-aware styling */}
        <img
          src={float1}
          alt="f1"
          className="absolute top-[20%] left-[10%] w-[200px] animate-float1 opacity-60 z-20 drop-shadow-lg"
          style={{
            filter: "brightness(0.8) contrast(1.2)",
            animation: "float1 6s ease-in-out infinite",
          }}
        />
        <img
          src={float2}
          alt="f2"
          className="absolute bottom-[15%] right-[8%] w-[200px] animate-float2 opacity-50 z-20 drop-shadow-lg"
          style={{
            filter: "brightness(0.8) contrast(1.2)",
            animation: "float2 8s ease-in-out infinite 2s",
          }}
        />
        <img
          src={float3}
          alt="f3"
          className="absolute top-[60%] left-[20%] w-[200px] animate-float3 opacity-70 z-20 drop-shadow-lg"
          style={{
            filter: "brightness(0.8) contrast(1.2)",
            animation: "float3 7s ease-in-out infinite 4s",
          }}
        />

        {/* Content with your original styling */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 px-[17%] py-3 leading-tight drop-shadow-2xl">
            Digitalize. Automate. Accelerate Growth
          </h1>
          <p className="text-lg md:text-xl mb-6 py-3 max-w-xl drop-shadow-xl">
            We help businesses go{" "}
            <span
              style={{
                fontFamily: "handwritten",
                fontStyle: "italic",
                fontWeight: 700,
                textDecoration: "underline",
                color: "yellow",
              }}
            >
              digital
            </span>
            , reduce their 
            <span
              style={{
                fontFamily: "handwritten",
                fontStyle: "italic",
                fontWeight: 700,
                textDecoration: "underline",
                color: "yellow",
              }}
            >
              {" "} Workload
            </span>
            , and turn more visitors into{" "}
            <span
              style={{
                fontFamily: "handwritten",
                fontStyle: "italic",
                fontWeight: 700,
                textDecoration: "underline",
                color: "yellow",
              }}
            >
              Customers
            </span>
          </p>

          <SpotlightButton label="Start Your Project" to="/contact" />
        </div>
      </section>
      

      

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(7deg);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
