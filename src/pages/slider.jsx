import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="Slider"
        style={{background:'#f4f6f8'}}
      >
        <SwiperSlide className='SliderSlide2'>
            <div className="main-brend-container">
                <h1 style={{fontSize:25}}>ПОПУЛЯРНЫЕ БРЕНДЫ</h1>
                <p style={{fontSize:15}}>Провете наши самые продоемые продукты на сайте GoodZone</p>
                <div className="brend-container8">
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-1.7d0e760d.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-2.da638971.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-3.1.7e56cb14.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-4.6b225624.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                </div>
                <div className="brend-container8">
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-5.6370db44.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-6.230d8c1e.png&w=256&q=75" alt="" style={{borderRadius:10}}/>
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-7.1.e1cf4ffd.png&w=256&q=75" alt=""style={{borderRadius:10}} />
                </div>
                <div className='brend-container'>
                    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-8.1.f5839910.png&w=256&q=75" alt=""style={{borderRadius:10}} />
                </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='SliderSlide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='SliderSlide2'>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
