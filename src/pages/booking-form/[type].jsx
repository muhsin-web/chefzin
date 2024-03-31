import { useRouter } from 'next/router';
import React from 'react'
import { FooterThree, HeaderThree, Wrapper } from '../../layout';
import SEO from '../../components/seo';
import BookChefme from '../../components/forms/booking-chefme';
import bookingInfo from '../../data/form-details';

const BookingForm = () => {
    const router = useRouter();
  const {type} = router.query;
  const bookingProduct = bookingInfo.filter((item) => item.type === type)
  return (
    <Wrapper>
      <SEO pageTitle={'Booking Form'} />
        <BookChefme product={bookingProduct}/>
    </Wrapper>
  )
}

export default BookingForm