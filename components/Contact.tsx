import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:nihat3371@hotmail.com?subject=${formData.subject}&body=My Name Is ${formData.name}. ${formData.message} `);

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="E-Mail"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Title"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
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