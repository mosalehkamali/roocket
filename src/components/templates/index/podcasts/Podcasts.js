"use client";

import React, { useRef, useState } from "react";
import styles from "./Podcasts.module.css";
import { PiArrowLeftFill, PiCirclesThreeFill } from "react-icons/pi";
import Link from "next/link";
import Podcast from "@/components/modules/cards/Podcast";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Podcasts() {
  return (
    <div className={styles.roadmaps}>
      <div className={styles.coursesHeader}>
        <div className={styles.coursesTitle}>
          <PiCirclesThreeFill />
          <h3>مسیرهای یادگیری</h3>
        </div>
        <Link href={"/"} className={styles.allCoursesBtn}>
          <span>مشاهده همه مسیرهای یادگیری</span>
          <PiArrowLeftFill />
        </Link>
      </div>

      <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Podcast />
        </SwiperSlide>
        <SwiperSlide>
          <Podcast />
        </SwiperSlide>
        <SwiperSlide>
          <Podcast />
        </SwiperSlide>
        <SwiperSlide>
          <Podcast />
        </SwiperSlide>
        <SwiperSlide>
          <Podcast />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Podcasts;
