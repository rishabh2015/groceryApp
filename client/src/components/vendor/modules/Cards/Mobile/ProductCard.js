import React , { Component } from "react";
import Product from "../../../Modals/Product"; 
import AddToCartComponent from "./AddToCartComponent";

export default class ProductCard extends Component{

    render(){
        let { product , cart, updateCart} = this.props;

        let percentDiscount = product.getPercentDiscount();
        let productName = product.getName();
        let price = product.getPrice();
        let prodId = product.getProdId();
        let moneyDiscount = product.getMoneyDiscount();
        let imgUrl = product.getImgUrl();
        let prodUrl = product.prodDetailUrl;
        let quantity = product.getMinQunatity();

        return(
            <div id={"product_id_"+prodId} className="display--inline-block mobile-slider__card">
                            <div className="display--inline-block vertical-align--top">
                                <a className="product__wrapper" data-test-id="plp-product" href={prodUrl}>
                                    <div className="plp-product">
                                        <div className="plp-product__offer">{percentDiscount}</div>
                                        <div className="plp-product__offer display--none">{moneyDiscount}</div>
                                        <div className="plp-product__img ">
                                            <div className="img-loader__wrapper__wrapper">
                                                <div className="img-loader__wrapper">
                                                    <img className="img-loader__img img-loader__img--shown img-loader__img--plp" alt={productName} src={imgUrl}/>
                                                    <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--plp"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="plp-product__name " title={productName} data-test-id="plp-product-name">
                                        <div className="plp-product__name--box" >{productName}</div>
                                        </div>
                                        <div className="plp-product__quantity" title="1 l" data-test-id="product-unit"><span>{quantity}</span></div>
                                        <div className="relative">
                                            <div className="plp-product__price">
                                                <div className="plp-product__price--container">
                                                <div className="display--inline-block@mobile"><span className="plp-product__price--new" data-test-id="plp-product-new-price">{"₹"}{price-moneyDiscount}</span></div>
                                                <div className="plp-product__price--old display--inline-block@mobile" data-test-id="plp-product-old-price">{"₹ "+price}</div>
                                             </div>
                                            </div>
                                            <AddToCartComponent product={product} cart={cart} updateCart={updateCart} />
                                        </div>
                                        <div className="plp-product__non-sbc-product"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
        );
    }
}