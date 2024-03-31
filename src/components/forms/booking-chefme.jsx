import React from 'react'
import { FooterThree, HeaderThree, Wrapper } from '../../layout'
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import ChefmeForm from './chefme'
import ChefAMonth from './chefamonth'
import ChefEvent from './chef-event'

const BookChefme = ({product}) => {
    console.log(product)
    const bookings = product[0]
  return (
    <Wrapper>
        <HeaderThree/>
        <Breadcrumb title={bookings?.title ? bookings?.title : 'hello'} />
        {
          bookings?.type == 'chefme' && <ChefmeForm />
        }
        {
          bookings?.type == 'chefmonth' && <ChefAMonth />
        }
        {
          bookings?.type == 'chefevent' && <ChefEvent />
        }
    </Wrapper>
  )
}

export default BookChefme