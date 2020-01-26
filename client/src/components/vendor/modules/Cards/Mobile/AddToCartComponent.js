import React, { Component } from "react";


export default class AddToCartComponent extends Component{

    constructor(props){

        super(props);
        var { product , cart } = this.props;
        var checkFlag = cart.checkItemInCart(product);
        this.state={
            checkFlag :checkFlag
        }
    }

    addItemToCart = () => {
    let { product, cart, updateCart } = this.props;
    cart.addItem(product);
    updateCart(cart);
    this.setState({checkFlag:true});
    }

    removeItemFromCart = () => {
        let { product, cart, updateCart  } = this.props;
        cart.removeItem(product);
        updateCart(cart);
        this.setState({checkFlag: true})
    }

    render(){
        var { product, cart } = this.props;
        var { checkFlag } = this.state;
        if(checkFlag){
        let prodCount = cart.getParticularProductCount(product);
        return(
                <div className="plp-product__add-to-cart">
                    <div className="add-to-cart">
                        <button onClick={this.removeItemFromCart} className="add-to-cart__dec display--inline-block" data-test-id="minus-button"></button>
                        <button className="add-to-cart__quantity" data-test-id="product-quantity"><span className="add-to-cart__text">{prodCount}</span></button>
                        <button onClick={this.addItemToCart} className="add-to-cart__inc display--inline-block" data-test-id="plus-button"></button>
                    </div>
                </div>
        );
        }
        else{
            return(
                <div onClick={this.addItemToCart} className="plp-product__add-to-cart">
                    <div className="add-to-cart">
                        <button className="add-to-cart__dec" data-test-id="minus-button"></button>
                        <button className="add-to-cart__add-btn" data-test-id="add-button"><span className="add-to-cart__text">ADD</span><span className="add-to-cart__plus-btn display--none@desktop display--none@tablet"></span></button>
                        <button className="add-to-cart__inc" data-test-id="plus-button"></button>
                    </div>
               </div>
            );
        }
    }
}