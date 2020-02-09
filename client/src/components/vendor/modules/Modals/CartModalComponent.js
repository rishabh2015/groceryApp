import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, getCartByUser } from "../../../../actions/user_actions";
import { Link } from "react-router-dom";


 class CartModalComponent extends Component{



    removeProduct = (product, cart) =>{
        cart.removeItem(product);
        this.setState({});
    }


    
    getProductDiv=(cart)=>{

     let productDiv = cart.productList.map((product)=>{
         let productImgUrl = product.imgUrl;
         let productName = product.name;
         let productPrice = product.price;
         let productOldPrice = product.oldPrice;
         let productDiscount = product.percentDiscount;
         let description = product.description;

       return<div><div class="cart-items-product cart-card" data-test-id="cart-product">
       <div class="display--inline-block cart-card__img" data-test-id="product-image">
       <div class="img-loader__wrapper__wrapper">
       <div class="img-loader__wrapper">
       <img class="img-loader__img img-loader__img--shown " alt={productName + "|"+description} src={productImgUrl}/>
       <span class="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
       </div>
       </div>
       </div>
        
       <div class="cart-items-product__details">
       <div class="product-discount" data-test-id="discount-percentage">{productDiscount}</div>
       <div class="product-name" data-test-id="product-name">{productName}</div>
       <div class="product-unit" data-test-id="product-unit">1 Unit</div>
       <div class="product-items">
       <div class="add-to-cart add-to-cart--cart-modal">
       <button onClick={()=>{console.log("product inhere", product);this.removeProduct(product, cart)}} class="add-to-cart__quantity" data-test-id="product-quantity">Remove Product</button>
       </div><span class="new-price">{'₹'+productPrice}</span><span class="old-price">{'₹'+productOldPrice}</span>
       <div class="total-price float-right" data-test-id="total-price">{'₹'+productPrice}</div>
       </div>
       </div></div></div>;
     })
     return productDiv;
    }

    getCartDiv=(cart)=>{
        let productList = cart.productList;
        let cartPrice = cart.getTotalCartPrice();
        let itemCount = cart.totalItemsInCart();
        let prodDetailDiv = this.getProductDiv(cart);



        return <div class="cart">
        <div class="cart-store-details">
        <div>
        <div class="cart-store-details__store-name float-left" data-test-id="sub-total-text">Sub Total</div>
        <div class="cart-store-details__total-price float-right" data-test-id="sub-total-price">{cartPrice}</div>
        <div class="clear"></div>
        </div>
        <div>
        <div class="cart-store-details__other-charges float-left" data-test-id="delivery-charges-text">
        Delivery Charges
        <span class="delivery-charge-icon" data-test-id="delivery-charge-icon"></span>
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
        {prodDetailDiv}
        </div>
        </div>
        <div class="cart-modal__footer cart-modal__footer--closed-cart-upsell">
        <div class="cart-promo-info">Promo code can be applied on payment page</div>
        <div class="cart-checkout">
        <Link to="/vendor/payment"><button class="btn btn--full cart-checkout__proceed-cta" data-test-id="checkout-button">
        <span><span>Proceed to Checkout</span><span class="total" data-test-id="checkout-price">{"₹"+cartPrice}</span>
        </span></button></Link></div></div>
        </div>
        </div>
        </div>;

    }

    getCartPrice =(cart)=>{
     return cart.getCartPrice();
    }


    render(){
        let { closeModal, cart, itemCount } = this.props;
        let productDiv = this.getProductDiv(cart);
        let cartDiv = this.getCartDiv(cart);
        
        return(
                <div class="ReactModal__Content ReactModal__Content--after-open ''" tabindex="-1" role="dialog" aria-label="">
                <span>
                <div class="cart-modal cart-modal--with-searchbar">
                <div class="cart-modal__header display--none@mobile">
                <div class="cart-header" data-test-id="cart-header">My Cart 
                <span class="cart-header__items-count" data-test-id="items-count">{"("+itemCount+ "item)"}</span>
                </div>
                </div>
                <button onClick={closeModal} class="modal-close__btn modal-close__btn--cart" data-test-id="btn-modal-close" aria-label="Close Cart">×</button>
                <div class="cart-modal__body os-windows cart-modal__body--closed-cart-upsell feature-freshbots-support-chat-web-bot_hash feature-freshbots-support-chat-web-bot_version feature-freshbots-support-chat-web-enabled">
                <div class="cart-header display--none@tablet display--none@desktop">My Cart <span class="cart-header__items-count">(1 item)</span>
                </div>
                <div>
                {cartDiv}
                </div>
                </div>
                </div>
                </span>
                </div>
        );
    }
}
export default connect()(CartModalComponent);