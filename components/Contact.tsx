import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col space-y-5">
        <h4 className="text-4xl font-semibold text-center relative">
          Ready to work with you,
          <p className="decoration-[#F7AB0A]/50 underline">Let's talk!</p>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+90 555 059 74 46</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">nihat3371@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">İzmir</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className=" flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="E-Mail" className="contactInput" type="email" />
          </div>
          <input placeholder="Title" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            typeof="submit"
            className="bg-gray-500 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Send Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
