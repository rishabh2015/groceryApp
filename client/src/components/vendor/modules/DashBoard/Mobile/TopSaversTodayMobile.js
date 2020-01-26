import React, { Component } from "react";
import ProductCard from "../../Cards/Mobile/ProductCard";


export default  class TopSaversTodayMobile extends Component{
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
			<div class="slider-container collection-slider">
			<div class="slider-header">Top Savers Today<a class="btn btn--link float-right weight--semibold product-slider-show-all-link push--right" href="/cln/top-savers-today/clid/59ccf411b02e5c4fb657088f">View all</a><span class="clearfix"></span></div>
			<div>
				<div class="slider--inline products products--inline products--card">
					<div>
						<div class="mobile-slider">
							<div>
							{productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
                        {productHTML}
								<div class="display--inline-block mobile-slider__card">
									<div class="display--inline-block vertical-align--top">
										<a class="last-card" href="/cln/top-savers-today/clid/59ccf411b02e5c4fb657088f">
											<div class="middle-center-aligned">
												<div class="btn btn--link weight--semibold product-slider-show-all-link last-card__link">See all</div>
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