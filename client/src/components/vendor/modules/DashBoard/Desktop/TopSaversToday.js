import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../../Cards/Desktop/ProductCard";

function CarouselNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="slider__arrow slider__arrow--next" onClick={onClick} >
            <div className="slider__arrow--nav slider__arrow--right icon-angle-bracket-right slider__arrow--bars" title="Next Product" aria-label="Next Product">
            </div>
        </button>
    );
  }
  
  function CarouselPrevArrow(props) {
    const { onClick } = props;
    return (
        <button  onClick={onClick} className="slider__arrow slider__arrow--prev">
            <div className="slider__arrow--nav slider__arrow--left icon-angle-bracket-left slider__arrow--bars" title="Previous Product" aria-label="Previous Product">
            </div>
        </button>
    );
  }

export default  class BestSellingItems extends Component{
	getProductsHTML = () =>{
		var { productList, cart, updateCart } = this.props;
		let productHML = productList.map(function(product, index){
			return (<ProductCard product={product} key={index} cart={cart} updateCart={updateCart} />)
		});
		return productHML;
		 }
    render(){
		
		var { isMobileFlag } = this.props;
		var {  productList,cart } = this.props;
        var productHTML = this.getProductsHTML();
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <CarouselNextArrow />,
            prevArrow: <CarouselPrevArrow />
          };
        return(
                <div className="slider-container collection-slider">
                <div className="slider-header">Top Savers Today<a className="btn btn--link float-right weight--semibold product-slider-show-all-link push--right" href="/cln/best-selling-items/clid/5bf2a9ea89b6cf0e7f00715d">View all</a><span className="clearfix"></span>
                </div>
                <div>
	            <div className="slider--inline products products--inline ">
		        <div>
			    <div className="slick-slider slick-initialized" dir="ltr">
                    <Slider {...settings} >
                        {productHTML}
				    </Slider>
                </div>
                </div>
                </div>
                </div>
	            </div>
        );      
    }
}