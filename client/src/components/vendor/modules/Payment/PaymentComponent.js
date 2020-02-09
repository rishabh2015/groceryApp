import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, onSuccessBuy, getCartByUser } from "../../../../actions/user_actions";



class PaymentComponent extends Component{
    
    constructor(props){
        super(props);
        let { cart, user } = props;
        this.state ={
            showSuccess: false
        }
        if(!user)
        {
            let userdata  = JSON.parse(window.sessionStorage.getItem("userData"));
            this.state = {
                userdata: userdata
            };
            console.log("payment user data", userdata);
        }   
        }

        transactionError = (data) => {
            console.log('Paypal error')
        }
    
        transactionCanceled = () => {
            console.log('Transaction cancled')
        }
    
        transactionSuccess = (data) => {
                this.props.dispatch(onSuccessBuy({
                    cartDetail: this.props.cart.dbCartDetail,
                    paymentData: [{"paymentMethod":"COD"}]
                })).then(()=>{
                    if(this.props.user.successBuy){
                        this.setState({
                            showTotal: false,
                            showSuccess: true
                        })
                    }
                })            
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
        let { showSuccess } = this.state;
        if(showSuccess){
            return(<div class="success-page">
            <img  src="http://share.ashiknesin.com/green-checkmark.png" class="center" alt="" />
           <h2>Payment Successful !</h2>
           <p>We are delighted to inform you that we received your payments</p>
           <a href="#" class="btn-view-orders">View Orders</a>
           <a href="/">Continue Shopping</a>
         </div>)
        }
        else{
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
                                    <li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-28" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-29" tabindex="0">Payment Options</li>
                                </ul>
                                <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-29" aria-labelledby="react-tabs-28">
                                    <div class="soft--bottom">
                                        <div class="payment-wallets">
                                            <ul class="wallet-opt-list list-unstyled cards-list">
                                                <li class="cards-list__item pdr-15" data-test-id="wallet">
                                                    <label for="Paytm" class="wallet-opt card-selection" data-test-id="Paytm">
                                                        <input id="Paytm" type="radio" class="radio" checked=""/><span class="radio-element"></span>
                                                        {/* <div class="display--inline-block wallet-type"><img alt="Paytm" class="wallet-type__img" src="//cdn.grofers.com/app/uploads/payments/paytm.png"/></div> */}
                                                        <div class="display--inline-block card-selection__details"><span class="wallet-opt-list__display-name weight--semibold">Cash On Delivery</span><span></span></div>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="payment-btn-holder">
                                            <button onClick={this.transactionSuccess} class="btn btn--full" data-test-id="place-order-button">Confirm Order</button>
                                        </div>
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
}

function mapStateToProps(state){
	return {
		user: state.user
		
	}
  }

export default connect(mapStateToProps)(PaymentComponent);