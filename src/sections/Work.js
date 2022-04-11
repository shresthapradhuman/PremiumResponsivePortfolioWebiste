import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { project } from "../data/setting";

const Work = () => {
  let cat = [];
  project.forEach((item) => {
    return cat.push(item.cat);
  });
  let catList = [...new Set(cat)];
  const [activeTab, setActiveTab] = useState("All");
  const [filterData, setFilterData] = useState(project);
  /** active tab data filtering system */
  const handleTab = (tab) => {
    if (tab !== "All") {
      setActiveTab(tab);
      let result = project.filter((item) =>
        item.cat.toLowerCase().includes(tab.toLowerCase())
      );
      setFilterData(result);
    } else {
      setActiveTab("All");
      setFilterData(project);
    }
  };
  return (
    <section className=" pt-20 pb-4 px-4 md:px-0 " id="work">
      <h2 className="text-center text-3xl font-medium text-primary mb-8 ">
        My Portfolio
      </h2>
      <div className="flex items-center justify-center gap-x-3 mb-8">
        <span
          className={`cursor-pointer text-body dark:text-[#f0f2f4] pt-1 px-3 font-medium rounded-lg ${
            activeTab === "All" ? " bg-primary " : ""
          }`}
          onClick={() => {
            handleTab("All");
          }}
        >
          All
        </span>
        {catList ? (
          catList.map((item, i) => (
            <span
              className={`cursor-pointer text-body dark:text-[#f0f2f4] pt-1 px-3 font-medium rounded-lg ${
                activeTab === item ? " bg-primary " : ""
              }`}
              key={i}
              onClick={() => {
                handleTab(item);
              }}
            >
              {item}
            </span>
          ))
        ) : (
          <p>loadding</p>
        )}
      </div>
      <div className="work_container grid max-w-5xl md:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-5 md:gap-5 pt-4 ">
        {filterData.map((item, i) => (
          <div className="bg-container p-4 rounded-[1rem]" key={i}>
            <img
              src={item.img}
              alt="work1"
              className="rounded-[1rem] mb-3"
            />
            <h3 className="work__title text-base text-lgt font-medium mb-1 ">
              {item.title}
            </h3>
            <a
              href="/"
              className="wordk__box w-max text-[#9580ff] text-sm flex items-center gap-x-1 group"
            >
              Demo{" "}
              <AiOutlineArrowRight className=" group-hover:translate-x-1 transition text-base" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
