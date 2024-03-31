import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
// import BrandArea from './brand-area';
import CountryArea from './country-area';
import ProjectAreas from './project-area';
import Services from './services';
import TeamArea from './team-area';
import TestimonialArea from './testimonial-area';
import PartnerArea from './partnership-area';
import FeatureArea from '../home-4/feature-area';
import ProjectArea from '../home/project-area';
import Testimonial from '../home/testimonial';
import BrandArea from '../home/brand-area';
import Partners from '../../partners/Partners';
import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import CtaTwo from '../../common/cta/cta-2';
import AboutArea from '../home-6/about-area';
import HeroArea from '../home-4/hero-area';

const HomeThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  
  return (
    <Wrapper>
      <HeaderThree/>
      <HeroArea/>
      <Services/>
      {/* <BrandArea/> */}
      <ProjectAreas/>
      <ProjectArea/>
      {/* <PartnerArea /> */}
      {/* <TeamArea/> */}
      <FeatureArea/>
      {/* <CountryArea/> */}
      <TestimonialArea/>x
      <AboutArea/>
      {/* <Testimonial/> */}
      {/* <BrandArea/> */}
      {/* <BlogArea/> */}
      <FooterThree/>
    </Wrapper>
  );
};

export default HomeThree;