import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperContainer = ({ children }) => {
    return (
        <div className="overflow-hidden px-5">
            <Swiper
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is >= 640px (sm)
                    500: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px (md)
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px (lg)
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="flex items-center"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperContainer;
