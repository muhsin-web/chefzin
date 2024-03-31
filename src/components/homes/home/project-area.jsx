import Link from 'next/link';
import React, { useEffect } from 'react';
import { portfolio_data } from '../../../data';
import PriceArea from '../../price/price-area';
import { menuProducts } from '../../../data/portfolio-data';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product, get_cart_products } from '../../../redux/features/cart-slice';
const ProjectArea = () => {
  const [category, setCategory] = React.useState('Bookings');
  const items = portfolio_data.filter(p => p.home);
  const [portfolioItems, setPortfolioItems] = React.useState(menuProducts.filter(i => i.category === category));
  const categories = ["Bookings", "Dish Menu", "Customized-Menu"];

  function handleCategory(c){
    setPortfolioItems([])
    setCategory(c)
    // const new_items = menuProducts.filter(i => i.category === c);
    setPortfolioItems(menuProducts.filter(i => i.category === c))
  }

  console.log(category)
  const dispatch = useDispatch();
  const { cart_products } = useSelector(state => state.cart);
  // set local storage
  useEffect(() => {
    dispatch(get_cart_products());
  }, [dispatch])

  // handleAddProduct
  const handleAddProduct = (item) => {
    dispatch(add_cart_product(item))
  }

  // const bigItems = portfolioItems.filter(i => i.big);
  // const sm_items = portfolioItems.filter(i => i.sm);


  return (
    <div className="tp-project-area p-relative pt-130 pb-100">
      <div className="tp-project-shape">
        <img src="assets/img/project/project-shape.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center mb-15">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="tp-project-section-box">
              <h5 className="tp-subtitle">Our Project</h5>
              <h2 className="tp-title">What chefzin has in house. </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="tp-service-tab-button">
              <nav>
                <div className="nav tp-service-tab justify-content-xl-end justify-content-lg-center" id="nav-tab"
                  role="tablist">
                  {categories.map((c, i) => (
                    <button onClick={() => handleCategory(c)} key={i}
                      className={`nav-links ${c === category ? 'active' : ''} mb-10`}
                      type="button">{c}</button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="project-tab-main">
          <div className="row gx-1">
            {
              category === "Bookings" && (
                <PriceArea />
              )
            }
           
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                {category != "Bookings" && portfolioItems.map(item => (
                  <div key={item.id} className=" col-xl-6 col-lg-6">
                    <div className="tp-project-box-sm d-flex align-items-center mb-20">
                      <div className="tp-project-sm-img fix ml-25 mr-35">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="tp-project-sm-content">
                        <h3 className="pro-sm-title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <p>{"Sales"}</p>
                        <p>{"NGN 3,000.00"}</p>
                        <div>
                          <a onClick={() => handleAddProduct(item)} className="tp-btn-white-sm">Add to Cart 
                          <i className="far fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {
              category === "Dish Menu" && (
                <Link href={'/product'}>
                <button>See all products</button>
                </Link>
              )
            }
      </div>
    </div>
  );
};

export default ProjectArea;