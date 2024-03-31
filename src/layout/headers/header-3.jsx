import Link from 'next/link';
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';
import { MdOutlineShoppingCart } from 'react-icons/md';

const HeaderThree = () => {
  const { headerSticky } = useSticky();
  return (
    <>
      <header className="d-none d-lg-block">
        <div id="header-sticky" className={`tp-header-area header-transparent hasdropdown-white pl-170 
        pr-170 ${headerSticky ? 'header-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a><img style={{tintColor: 'black' }} src={`/assets/img/logo/${headerSticky ? 'logo-blue.png' : 'logo.png'}`} alt="" /></a>
                  </Link>
                </div>
              </div>
              <div className={`col-xxl-6 col-xl-6 col-lg-6 ${headerSticky ? "tp-menu-white": "#000"}`}>
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-login flex tp-login-primary  d-lg-none d-xl-block">
                    <MdOutlineShoppingCart />
                    <Link href="/cart">
                      <a>Cart</a>
                    </Link>
                  </div>
                  <div className="tp-header-yellow-button ml-55">
                    <Link href="/contact">
                      <a className="tp-btn-yellow-semilar">Chef Near Me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-blue.png"} bg={'tp-green-bg'} />
      {/* <!-- mobile-menu-area-end --> */}
    </>
  );
};

export default HeaderThree;