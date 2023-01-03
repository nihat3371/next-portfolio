import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1546860989097955328/gHhaJl3l_400x400.jpg"
      />
      <div className="  px-0 md:px-10">
        <h4 className="text-4xl font-light">FRONT END LUMHAR</h4>
        <p className="font-bold text-2xl mt-1">pararar</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.sistemkod.com/images/blog/javascriptlogo.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://v4.mui.com/static/logo.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
          />
          <img
            className="h-10 w-10 rounded-full "
            src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">started work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary of someting idk</li>
          <li>summary of someting idk</li>
          <li>summary of someting idk</li>
          <li>summary of someting idk</li>
          <li>summary of someting idk</li>
        </ul>
      </div>
    </article>
  );
}
