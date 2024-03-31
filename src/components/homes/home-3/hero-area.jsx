import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightTwo } from '../../../svg';
// import {} from 'reacti'
import { MdCheck } from "react-icons/md";

 const hero_contents = {
  title: <>Experience perfect culinary services at your <span className="tp-highlight">
    <HighlightTwo /><i> convenience..</i></span></>,
  text: 'Effortlessly connect with top-tier chefs, book bulk meals for any home, holiday and event services.',
  text1: 'Find the perfect chef service for you',
  text2: 'Culinary Arts Education',
  text3: 'Receive personalized services',
  text4: 'Order bulk meals',
  text5: 'Get quotes within 30 minutes',
  btn_text: 'Chef Near Me',
  video_title: 'Behind the scenes',
  video_id: 'LJbkLdtEW00',
  hero_img: '/assets/img/hero/bgimag.JPG'
}
const { title, text, btn_text, hero_img, text3, text4, text5, video_id, video_title, text1, text2 } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area-two pt-130 p-relative fix">
        <div className="tp-hero-shape-three ">
          <img src="/assets/img/hero/hero-shape-3.png" alt="" />
        </div>
        {/* <div className="tp-hero-circle-three"></div> */}
        <div style={{maxWidth: '1530px', marginLeft: 'auto'}}>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="tp-hero-section-box pt-140 pb-200">
                <div className='wow tpfadeUp' data-wow-duration=".3s" data-wow-delay=".6s">
                  <h3 className="ct-hero-title">{title}</h3>
                </div>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"><MdCheck /> {text1}</p>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"><MdCheck /> {text2}</p>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"><MdCheck /> {text3}</p>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"><MdCheck /> {text4}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <div className="xs-bottom-space">
                    <Link href={'/contact'}>
                      <a className="tp-btn-yellow-semilar mr-55">{btn_text}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="tp-hero-right-img wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s">
                <img style={{height: '100%', width: '100%'}} src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;