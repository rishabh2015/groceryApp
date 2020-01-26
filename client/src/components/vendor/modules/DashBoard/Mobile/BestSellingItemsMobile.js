import React, { Component } from "react";
import ProductCard from "../../Cards/Mobile/ProductCard";


export default  class BestSellingItemsMobile extends Component{

    getProductsHTML = () =>{
    var { productList, cart, updateCart } = this.props;
    let productHML = productList.map(function(product, index){
        return (<ProductCard product={product} key={index} cart={cart} updateCart={updateCart} />)
    });
    return productHML;
     }

    render(){
		var { isMobileFlag, productList,cart } = this.props;
        var productHTML = this.getProductsHTML();
        return(
<div className="slider-container collection-slider">
    <div className="slider-header">Best Selling Items<a className="btn btn--link float-right weight--semibold product-slider-show-all-link push--right" href="/cln/best-selling-items/clid/5bf2a9ea89b6cf0e7f00715d">View all</a><span className="clearfix"></span></div>
    <div>
        <div className="slider--inline products products--inline products--card">
            
			<div>

                <div className="mobile-slider">
                    <div>
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        <div className="display--inline-block mobile-slider__card">
                            <div className="display--inline-block vertical-align--top">
                                <a className="last-card" href="/cln/best-selling-items/clid/5bf2a9ea89b6cf0e7f00715d">
                                    <div className="middle-center-aligned">
                                        <div className="btn btn--link weight--semibold product-slider-show-all-link last-card__link">See all</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        );      
    }
}