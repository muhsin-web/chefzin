import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import ServiceDetailsArea from './service-details-area';
import PriceArea from '../price/price-area';
import JobArea from '../job/job-area';


const ServiceDetails = ({service}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={service?.title ? service?.title : 'Service Details'} />
      {
        service.title == "Book/Hire a chef" ? (
          <PriceArea />
        ): service.title == "Culinary arts Education" ? (
          <JobArea/>
        ) : (
          <ServiceDetailsArea/>
        )
      }
      <AccordionArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceDetails;