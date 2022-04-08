import React from "react";
import { testimonial } from "../data/setting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section className=" pt-20 pb-4 px-4 md:px-0 " name="testimonial">
      <h2 className="text-center text-3xl mb-10 font-medium text-primary ">
        Testimonial
      </h2>
      <div className="flex items-center justify-center max-w-5xl mx-auto gap-x-3 mb-8">
        <Swiper
          spaceBetween={24}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {/* testimonial card */}
          {testimonial.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-container py-5 px-6 rounded-3xl mb-12">
                <img
                  src={item.pic}
                  alt={item.name}
                  className="w-16 rounded-full mb-4"
                />
                <h3 className="font-medium mb-1 text-txt">{item.name}</h3>
                <p className="text-sm text-lgt">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
