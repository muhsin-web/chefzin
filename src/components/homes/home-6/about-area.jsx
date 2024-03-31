import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import { Box, Flex, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const about_contents = {
  about_img: '/assets/img/about/about-6.1.png',
  subtitle: 'Why Choose us',
  title: <>We have amazing partners using us for their own  <span className="tp-section-highlight"> customers
    <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60" />
    </svg> </span> </>,
  sm_desc: "we believe in the power of collaboration to elevate culinary experiences and enrich the lives of our customers. That's why we're extending an invitation for you to partner with us to provide exceptional services.",
  btn_text: 'About Collax'
}
const { about_img, btn_text, sm_desc, subtitle, title } = about_contents;

const AboutArea = () => {
  const [sliderLoop, setSliderLoop] = useState(false);
  useEffect(() => setSliderLoop(true), [])
  return (
    <div className="tp-about-area grey-bg pt-120 pb-120 p-relative fix">
      <Shape shape_class="sm-1" img='chose/hero-shape-5.1.png' />
      <Shape shape_class="sm-2" img='chose/bp-chose-5.2.png' />
      <div className="bp-about-shape d-none d-md-block">
        <img src="/assets/img/about/about-shape-6.1.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="bp-about-img">
              <img src={about_img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-feature-section-title-box bs-section-title-space">
              <h2 className="tp-title tp-title-sm">{title}</h2>
              <p className="pb-25">{sm_desc}</p>
              
              <Swiper
                loop={sliderLoop}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={10}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  '1200': {
                    slidesPerView: 3,
                  },
                  '992': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 2,
                  },
                  '576': {
                    slidesPerView: 2,
                  },
                  '0': {
                    slidesPerView: 2,
                  },
                }}
              >
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightcyan'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Venue/holiday home owners </Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightgrey'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Event planners/coordinators </Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightyellow'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Corporate PA/VA </Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightblue'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Nutritionist</Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightpink'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Healthcare Facilities</Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightcyan'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Educational facilities</Text></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex justify={'center'} align={'center'} borderRadius={20} backgroundColor={'lightcyan'} height={100} paddingX={5} paddingY={3}><Text mb={0}>Business</Text></Flex>
            </SwiperSlide>
          </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

const Shape = ({ shape_class, img }) => {
  return (
    <div className={`bs-about-${shape_class} d-none d-lg-block`}>
      <img src={`/assets/img/${img}`} alt="" />
    </div>
  )
}