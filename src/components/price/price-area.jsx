import Link from 'next/link';
import React from 'react';

function SinglePrice({active=false,title,price,sm_title,lists, bookType }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
      <div className={`cpprice ${active?'active':''} text-center mb-20`}>
        <div className="cpprice__title">
          <h3 className="cp-price-title">{title}</h3>
        </div>
        <div className="cpprice__meta">
          <span><b>${price}</b>/ months</span>
        </div>
        <div className="cpprice__title-sm">
          <h4 className="cp-price-sm-title">{sm_title}</h4>
        </div>
        <div className="cpprice__list">
          <ul>
            {lists && lists.map((l,i) => <li key={i}>{l}</li>)}
          </ul> qw2
        </div>
        <div className="cpprice__button">
          <Link href={`booking-form/${bookType}`}>
          <button onClick={''} className="tp-btn-yellow">Get Started Today <i className="fal fa-long-arrow-right"></i></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const PriceArea = () => {
  return (
    <>
      <div className="cp-price-area pt-10 pb-130">
        <div className="container">
          <div className="row tp-gx-15">
            <SinglePrice title={'CHEFME'} price={29} 
            sm_title={'Book a professional chef for one time'} 
            bookType = {'chefme'}
            lists={['Trained and verified cooks','healthy and hygienic meals','grocery procurement','customizable, quick service']} />

            <SinglePrice title={'Chef for a month'} price={49} active={true}
            sm_title={'Shortlet:'} 
            bookType = {'chefmonth'}
            lists={['Trained & verified monthly cook for your home/  short Airbnb holiday season','Multi-cuisine expert chef','effortless replace','quick service', '30 days guaranteed service']} />

            <SinglePrice title={'Chefme events'} price={99}
            sm_title={'Book a professional chef for any type of event'} 
            bookType = {'chefevent'}
            lists={['Trained and verified chefs','multi-cuisine experts chefs','grocery procurement','customizable guaranteed service', 'quick service']} />
 
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;