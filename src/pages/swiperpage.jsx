import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperpage.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 0);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscount-on-samsung-and-soundbar.cec5f6b5.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzoodpay.884f0db7.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscount-on-scales.e38d9cbd.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscount-on-scales.e38d9cbd.png&w=828&q=75 " alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbeko.f062affb.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhaier.498a37cb.png&w=828&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_slider_image15.f1af0710.png&w=1080&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_slider_image15.f1af0710.png&w=1080&q=75" alt="" /></SwiperSlide>
        <SwiperSlide className='sliderslide'><img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig-slider-image-4.7be912ef.png&w=1080&q=75" alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
