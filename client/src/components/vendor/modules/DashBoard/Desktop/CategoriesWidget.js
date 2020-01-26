import React, { Component }  from 'react';
import Slider from "react-slick";

function CarouselNextArrow(props) {
    const { onClick } = props;
    return (
      
        <button className="slider__arrow slider__arrow--next category-slider__arrow-next">
        <div onClick={onClick} className="slider__arrow--nav slider__arrow--right icon-angle-bracket-right slider__arrow--circle" title="Next Product" aria-label="Next Product"></div>
        </button>
    );
  }
  
  function CarouselPrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="slider__arrow slider__arrow--prev category-slider__arrow-previous">
        <div onClick={onClick} className="slider__arrow--nav slider__arrow--left icon-angle-bracket-left slider__arrow--circle" title="Previous Product" aria-label="Previous Product"></div>
        </button>
    );
  }
export default class CategoriesWidget extends Component{

    render(){

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            nextArrow: <CarouselNextArrow />,
            prevArrow: <CarouselPrevArrow />
          };
                return(
                <div className="store-card-categories">
                <div className="category-slider slider-inline">
                <div className="slick-slider slick-initialized" dir="ltr">
                
                <Slider {...settings} >

                <div data-index="8" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/home-kitchen/cid/1047" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt="Home &amp; Kitchen" src="//webcdn.grofers.com/cdn/pdp/category-l0-1047.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Home & Kitchen"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
                <div data-index="9" className="slick-slide" tabindex="-1" aria-hidden="true" >
                <div>
                <a className="category-slider__category-block" data-test-id="top-category" tabindex="-1" href="/cn/furnishing-home-needs/cid/1379" >
                <div className="category-slider__category-img">
                <div className="img-loader__wrapper__wrapper">
                <div className="img-loader__wrapper">
                <img className="img-loader__img img-loader__img--shown category-slider__category-img" alt={"Furnishing & Home Needs"} src="//webcdn.grofers.com/cdn/pdp/category-l0-1379.jpg"/>
                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden category-slider__category-img img-loader__placeholder--category-slider"></span>
                </div>
                </div>
                </div>
                <div className="category-slider__category-text">{"Furnishing & Home Needs"}</div>
                </a>
                </div>
                </div>
               
                </Slider>
                
                </div>
                </div>
                </div>
        );
    }
}