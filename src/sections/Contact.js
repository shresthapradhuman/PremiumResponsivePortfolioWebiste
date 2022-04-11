import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { contactInfo } from "../data/setting";
const Contact = () => {
  return (
    <section name="contact" className="pt-20 pb-4 px-4">
      <h2 className="text-center text-3xl text-primary mb-8 ">Contact Me</h2>
      {/* contact container */}
      <div className="grid max-w-5xl mx-auto lg:grid-cols-2  gap-12">
        {/* contact content */}
        <div>
          {/* contact title */}
          <h3 className=" text-center text-xl mb-6 dark:text-txt">
            Talk To Me
          </h3>
          {/* contact info */}
          <div className="grid gap-4">
            {/* contact card */}
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-container p-4 rounded-3xl text-center space-y-2"
              >
                {/* contact card icon */}
                <span className=" text-3xl w-10 h-10 flex mx-auto items-center justify-center text-white ">
                  {item.icon}
                </span>

                {/* contact card title */}
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <span className="block font-medium text-txt">
                  {item.detail}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  className="flex justify-center items-center font-medium transition group text-primary "
                  rel="noreferrer"
                >
                  Write me{" "}
                  <AiOutlineArrowRight className="ml-2 transition group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* form title */}
          <h3 className="text-center text-xl mb-6 dark:text-txt">
            Write me your project
          </h3>
          {/* form container */}
          <form className="space-y-8 mt-8">
            <div className="relative h-16">
              <label
                htmlFor="name"
                className="absolute -top-3 left-5 text-sm p-1 dark:text-txt bg-white dark:bg-body z-20"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="absolute top-0 left-0 w-full h-full border-2 border-txt bg-transparent text-txt outline-none p-6 rounded-xl z-10"
              />
            </div>
            <div className="relative h-16">
              <label
                htmlFor="email"
                className="absolute -top-3 left-5 text-sm p-1 dark:text-txt bg-white dark:bg-body  z-20"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="absolute top-0 left-0 w-full h-full border-2 border-txt bg-transparent text-txt outline-none p-6 rounded-xl z-10"
              />
            </div>
            <div className="relative h-44 mb-12">
              <label
                htmlFor="message"
                className="absolute dark:text-txt -top-3 left-5 text-sm p-1 bg-white dark:bg-body  z-20"
              >
                Message
              </label>
              <textarea
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                className="absolute top-0 left-0 w-full border-2 border-txt bg-transparent text-txt outline-none p-6 rounded-xl z-10 h-full resize-none"
              ></textarea>
            </div>
            <button className="border-2 w-max p-3 rounded-xl border-primary md:text-xl font-medium bg-primary text-body">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
