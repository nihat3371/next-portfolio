import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        className=" -mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] "
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/profile_images/1546860989097955328/gHhaJl3l_400x400.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-gray-500">
          WHO ARE <span className="underline decoration-gray-200">YOU</span>
        </h4>
        <p className="text-lg">
          As a self-learner, I'm on track to learn more and more. I started with
          my journey writing HTML templates, but the web is a whole ocean now.
          But now, I'm usually creating type safe web/mobile applications for
          users from all around the world. I want to prove my skills for my
          work's next tech and playgrounds.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
