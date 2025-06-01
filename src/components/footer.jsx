import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa"; 
import { logo } from "../assets/index";
// import { a } from "framer-motion/client";




 const RevealBento = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-12 text-zinc-50">
      
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl w-full grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        {/* <LocationBlock />
        <EmailListBlock /> */}
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={logo}
      alt="avatar"
      className="mb-4 size-14 "
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      hello@sandsyntax.com{" "}
      <span className="text-zinc-400 text-2xl">
        Say hello — we’ll get back to you ASAP.
      </span>
    </h1>
    {/* <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a> */}
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaTwitter/>
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
     We Love to.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

// const LocationBlock = () => (
//   <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
//     <FiMapPin className="text-3xl" />
//     <p className="text-center text-lg text-zinc-400">Cyberspace</p>
//   </Block>
// );

// const EmailListBlock = () => (
//   <Block className="col-span-12 md:col-span-9">
//     <p className="mb-3 text-lg">Join my mailing list</p>
//     <form
//       onSubmit={(e) => e.preventDefault()}
//       className="flex items-center gap-2"
//     >
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
//       />
//       <button
//         type="submit"
//         className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
//       >
//         <FiMail /> Join the list
//       </button>
//     </form>
//   </Block>
// );

const PolicyButton = ({ label, to }) => {
  return (
    <a
      href={to}
      className="inline-flex items-center gap-2 text-white underline hover:text-yellow-300"
    >
      <span>{label}</span>
      <FiArrowUpRight />
    </a>
  );
};



const Footer = () => {
  return (
    <footer className="mt-12 flex justify-center gap-10">
      <PolicyButton label="Privacy" to="/PrivacyPolicy" />
      <PolicyButton label="Term and condition" to="/PrivacyPolicy" />
      <PolicyButton label="Our Comitments" to="/PrivacyPolicy" />
    </footer>
  );
};


export default RevealBento;