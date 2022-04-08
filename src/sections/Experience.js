import React from "react";
import { skills } from "../data/setting";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section name="experience" className="pt-16 pb-8 px-4">
      <h2 className="text-center text-3xl text-primary mb-8">My Experience</h2>
      <div className="grid gap-y-10 pt-4 lg:pt-8 max-w-5xl md:grid-cols-2 md:gap-8 mx-auto">
        {skills.map((item, i) => (
          <div className="bg-container p-6 rounded-3xl" key={i}>
            <h3 className="text-base font-medium text-primary text-center mb-6">
              {item.title}
            </h3>
            <div className="flex justify-center gap-x-10">
              <div className="grid grid-cols-2 content-start gap-8 lg:gap-x-20 lg:gap-y-10">
                {item.data.map((itm, i) => (
                  <div key={i} className="flex gap-3">
                    <HiBadgeCheck className="text-base text-primary mt-1" />
                    <div className="text-txt">
                      <h3 className="text-base font-medium">{itm.title}</h3>
                      <span className="text-sm">{itm.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
