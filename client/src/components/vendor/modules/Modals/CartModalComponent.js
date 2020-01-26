import React, { Component } from "react";

export default class CartModalComponent extends Component{
    render(){
        let { closeModal, cart, itemCount } = this.props;
        return(
                <div class="ReactModal__Content ReactModal__Content--after-open ''" tabindex="-1" role="dialog" aria-label="">
                <span>
                <div class="cart-modal cart-modal--with-searchbar">
                <div class="cart-modal__header display--none@mobile">
                <div class="cart-header" data-test-id="cart-header">My Cart 
                <span class="cart-header__items-count" data-test-id="items-count">(1 item)</span>
                </div>
                </div>
                <button onClick={closeModal} class="modal-close__btn modal-close__btn--cart" data-test-id="btn-modal-close" aria-label="Close Cart">×</button>
                <div class="cart-modal__body os-windows cart-modal__body--closed-cart-upsell feature-freshbots-support-chat-web-bot_hash feature-freshbots-support-chat-web-bot_version feature-freshbots-support-chat-web-enabled">
                <div class="cart-header display--none@tablet display--none@desktop">My Cart <span class="cart-header__items-count">(1 item)</span>
                </div>
                <div>
                <div class="cart">
                <div class="cart-store-details">
                <div>
                <div class="cart-store-details__store-name float-left" data-test-id="sub-total-text">Sub Total</div>
                <div class="cart-store-details__total-price float-right" data-test-id="sub-total-price">₹92</div>
                <div class="clear"></div>
                </div>
                <div>
                <div class="cart-store-details__other-charges float-left" data-test-id="delivery-charges-text">Delivery Charges<span class="delivery-charge-icon" data-test-id="delivery-charge-icon"></span>
                </div>
                <div class="cart-store-details__delivery-charges float-right"><span class="text--danger" data-test-id="delivery-charge-value">+ ₹29</span>
                </div>
                <div class="clear"></div>
                </div>
                </div>
                <div class="cart-store-details cart-store-details--total-savings">
                <div class="font-size--medium float-left" data-test-id="total-savings-label">Your total savings</div>
                <div class="font-size--medium text--danger float-right" data-test-id="total-savings-amount">₹28 (23.33%)</div>
                <div class="clear"></div>
                </div>
                <div>
                <div>
                <div>
                <div class="cart-items">
                <div class="cart-items-product cart-card" data-test-id="cart-product">
                <div class="display--inline-block cart-card__img" data-test-id="product-image">
                <div class="img-loader__wrapper__wrapper">
                <div class="img-loader__wrapper">
                <img class="img-loader__img img-loader__img--shown " alt="Fortune Soya Health Refined Soyabean Oil (Pouch)" src="//cdn.grofers.com/app/images/products/normal/pro_52.jpg?ts=1565763930"/>
                <span class="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
                </div>
                </div>
                </div>
                <div class="cart-items-product__details">
                <div class="product-discount" data-test-id="discount-percentage">23% OFF</div>
                <div class="product-name" data-test-id="product-name">Fortune Soya Health Refined Soyabean Oil (Pouch)</div>
                <div class="product-unit" data-test-id="product-unit">1 l</div>
                <div class="product-items">
                <div class="add-to-cart add-to-cart--cart-modal">
                <button class="add-to-cart__dec display--inline-block" data-test-id="minus-button"></button>
                <button class="add-to-cart__quantity" data-test-id="product-quantity"><span class="add-to-cart__text">1</span>
                </button>
                <button class="add-to-cart__inc display--inline-block" data-test-id="plus-button"></button>
                </div><span class="new-price">₹92</span><span class="old-price">₹120</span>
                <div class="total-price float-right" data-test-id="total-price">₹92</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                
                <div class="cart-modal__footer cart-modal__footer--closed-cart-upsell"><div class="cart-promo-info">Promo code can be applied on payment page</div><div class="cart-checkout"><button class="btn btn--full cart-checkout__proceed-cta" data-test-id="checkout-button"><span><span>Proceed to Checkout</span><span class="total" data-test-id="checkout-price">₹121</span></span></button></div></div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </span>
                </div>
        );
    }
}