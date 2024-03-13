import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './caruselswiper.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-view-2"
      >
        
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-view"
      >
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-view'>
           
        </SwiperSlide>
      </Swiper>
    </>
  );
}
