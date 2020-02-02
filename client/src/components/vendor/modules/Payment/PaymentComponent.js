import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems } from "../../../../actions/user_actions";



class PaymentComponent extends Component{




    constructor(props){
        super(props);
        let { cart } = props;
        if(cart.productList.length == 0){
         this.props.dispatch(getCartItems()).then((response)=>{
             console.log("cart response",response);
         })
        }


    }

    getProductDiv = ()=> {
        let { cart } = this.props;
        let productList = cart.productList;
        let productDiv = productList.map((product)=>{
            let productImgUrl = product.imgUrl;
         let productName = product.name;
         let productPrice = product.price;
         let productOldPrice = product.oldPrice;
         let productDiscount = product.percentDiscount;
         let description = product.description;
            return(
                                <div class="checkout-cart__item">
                                    <div class="checkout-cart__item-count display--table-cell">1</div>
                                    <div class="checkout-cart__img-box display--table-cell">
                                        <div class="img-loader__wrapper__wrapper">
                                            <div class="img-loader__wrapper"><img class="img-loader__img img-loader__img--shown " alt="Fortune Premium Kachi Ghani Pure Mustard Oil (Bottle)" src={productImgUrl}/>
                                            <span class="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span></div>
                                        </div>
                                    </div>
                                    <div class="checkout-cart__item-name-box vertical-align--top display--table-cell">
                                        <div class="checkout-cart__item-promo">{productDiscount}</div>
                                        <div class="checkout-cart__item-name" data-test-id="product-name">{productName}</div>
                                        <div class="checkout-cart__item-unit">1 l</div><span class="checkout-cart__item-price weight--semibold" data-test-id="checkout-item-price"><span>{"₹"+productPrice}</span></span>
                                    </div>
                                </div>
                            
            );

        });
        return <div>{productDiv}</div>

    }
    getPaymentInvoice = ()=>{
      let { cart } = this.props;
      
      let productList = cart.productList;
      let cartPrice = cart.getTotalCartPrice();
      let totalCartPrice = cartPrice+29;
      let itemCount = cart.totalItemsInCart();
      
        return(
        <div class="payment-invoice">
        <div class="payment-invoice__row">
            <div class="float-left" data-test-id="total-amount-text">Total Amount</div>
            <div class="float-right" data-test-id="total-amount-value">{"₹"+cartPrice}</div>
            <div class="clear"></div>
        </div>
        <div class="payment-invoice__row">
            <div class="float-left" data-test-id="delivery-charge-text">Delivery Charges</div>
            <div class="float-right text--danger" data-test-id="delivery-charge-value">+ ₹29</div>
            <div class="clear"></div>
        </div>
        <div class="payment-invoice__row"></div>
        <div class="payment-invoice__row">
            <div class="float-left text--dark-gray" data-test-id="payable-amount-text">Amount Payable<span class="display--block@mobile font-size--small text--light-gray">(incl. of all taxes)</span></div>
            <div class="float-right text--dark-gray" data-test-id="payable-amount-value">{"₹"+totalCartPrice}</div>
            <div class="clear"></div>
        </div>
    </div>
      );
    }


    render(){

        let cartInvoiceDiv = this.getPaymentInvoice();
        let productCartDiv = this.getProductDiv();
        return(
            <div>
    <div class="checkout-wrapper wrapper">
        <div class="checkout">
            <div name="payment">
                <div class="checkout-step checkout-step--active"><span class="checkout-step__number">1</span><span class="checkout-step__name" data-test-id="payment-title">Payment</span>
                    <div class="checkout-step__body checkout-step__body--payment-step">
                        <section class="payment">
                            {cartInvoiceDiv}
                            <div>
                            </div>
                            <div class="react-tabs" data-tabs="true">
                                <ul class="react-tabs__tab-list" role="tablist">
                                    <li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-28" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-29" tabindex="0">Wallet</li>
                                </ul>
                                <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-29" aria-labelledby="react-tabs-28">
                                    <div class="soft--bottom">
                                        <div class="payment-wallets">
                                            <ul class="wallet-opt-list list-unstyled cards-list">
                                                <li class="cards-list__item" data-test-id="wallet">
                                                    <label for="Paytm" class="wallet-opt card-selection" data-test-id="Paytm">
                                                        <input id="Paytm" type="radio" class="radio" checked=""/><span class="radio-element"></span>
                                                        <div class="display--inline-block wallet-type"><img alt="Paytm" class="wallet-type__img" src="//cdn.grofers.com/app/uploads/payments/paytm.png"/></div>
                                                        <div class="display--inline-block card-selection__details"><span class="wallet-opt-list__display-name weight--semibold">Paytm</span><span></span></div>
                                                    </label>
                                                </li>
                                                <li class="cards-list__item" data-test-id="wallet">
                                                    <label for="MobiKwik" class="wallet-opt card-selection" data-test-id="MobiKwik">
                                                        <input id="MobiKwik" type="radio" class="radio"/><span class="radio-element"></span>
                                                        <div class="display--inline-block wallet-type"><img alt="MobiKwik" class="wallet-type__img" src="//cdn.grofers.com/app/uploads/payments/mobikwik_wallet.png"/></div>
                                                        <div class="display--inline-block card-selection__details"><span class="wallet-opt-list__display-name weight--semibold">MobiKwik</span><span></span><span class="display--block font-size--small push__half--top text--success">Up to Rs.200 Mobikwik SuperCash| Min Txn Rs. 1200| Valid b/w 1st-13th Feb| Payment to be done via MobiKwik Wallet | T&amp;C Apply</span></div>
                                                    </label>
                                                </li>
                                                <li class="cards-list__item" data-test-id="wallet">
                                                    <label for="Airtel Money" class="wallet-opt card-selection" data-test-id="Airtel Money">
                                                        <input id="Airtel Money" type="radio" class="radio"/><span class="radio-element"></span>
                                                        <div class="display--inline-block wallet-type"><img alt="Airtel Money" class="wallet-type__img" src="//cdn.grofers.com/images/airtelmoney.png"/></div>
                                                        <div class="display--inline-block card-selection__details"><span class="wallet-opt-list__display-name weight--semibold">Airtel Money</span><span></span></div>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="payment-btn-holder">
                                            <button class="btn btn--full" data-test-id="place-order-button">Pay Now</button>
                                        </div>
                                        <div class="center-aligned font-size--small push--bottom">You will be redirected to wallet’s website to authorize payment</div>
                                    </div>
                                </div>
                                <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-31" aria-labelledby="react-tabs-30"></div>
                                <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-33" aria-labelledby="react-tabs-32"></div>
                                <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-35" aria-labelledby="react-tabs-34"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout-right display--none@mobile">
            <div>
                <div class="checkout-right__section checkout-right__section--cart">
                    <div name="checkoutCart">
                        <div>
                            <div class="checkout-cart__box"><span class="checkout-cart__title display--inline-block">My Cart</span><span class="float-right" data-test-id="no-of-items">1 item</span>
                                <div class="clear"></div>
                            </div>
                            {productCartDiv}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>
        );
    }
}

export default connect()(PaymentComponent);