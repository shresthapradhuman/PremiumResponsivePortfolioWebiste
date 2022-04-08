import React, { useState } from "react";
import { service } from "../data/setting";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
const Service = () => {
  const [clk, setClk] = useState(false);
  const handleClk = () => {
    setClk(!clk);
  };

  return (
    <section name="service" className="pt-16 pb-8 px-4">
      <h2 className="text-center text-3xl font-medium text-primary">
        My Service
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto px-4 md:px-0 gap-6 pt-16">
        {service.map((item, i) => (
          <div
            className=" bg-container pt-6 px-4 pb-6 rounded-2xl text-txt"
            key={i}
          >
            <h3 className=" text-lg mb-4 ">{item.title}</h3>
            <span
              className="text-primary  text-sm flex items-center gap-x-1 cursor-pointer group"
              onClick={handleClk}
            >
              See more{" "}
              <AiOutlineArrowRight className=" text-base transition group-hover:translate-x-1" />
            </span>
            <div
              className={` fixed inset-0 bg-modal py-8 px-4 grid place-items-center transition z-[1000]  ${
                clk ? "visible opacity-100" : "opacity-0 invisible"
              }`}
            >
              <div className=" relative bg-[#0b111e] pt-20 px-6 pb-10 rounded-3xl ">
                <RiCloseFill
                  className=" absolute top-6 right-6 text-2xl text-primary cursor-pointer"
                  onClick={() => {
                    setClk(false);
                  }}
                />
                <h3 className=" text-center text-base text-primary mb-4">
                  {item.title}
                </h3>
                <p className=" text-center text-sm mb-8">{item.description}</p>
                <ul className="grid gap-y-3">
                  {item.info.map((item, i) => (
                    <li key={i} className="flex items-start gap-x-2">
                      <BsCheck className=" text-2xl text-primary " />
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
