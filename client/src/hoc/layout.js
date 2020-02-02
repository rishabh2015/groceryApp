import React, { Component } from 'react';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import Cart from "../components/vendor/Modals/Cart";
import { isMobile } from "react-device-detect";
import VendorApp from '../components/vendor/App';
import HeaderComponent from '../components/vendor/modules/header/HeaderComponent';
import { connect } from "react-redux";  


class Layout extends Component {


    constructor(props)
    {
      super(props);
      let cart = new Cart();
      this.state={
        isMobileFlag : isMobile,
        cart: cart,
        updateCart: (cart)=>{console.log("in herer checking the satete", cart); this.state.cart=cart;this.setState({});}
      }
    }
    updateDimensions= () => {
      var mobileFlag = (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i))? true: false;
      
      if(mobileFlag != this.state.isMobileFlag){
        this.setState({isMobileFlag: mobileFlag});
      }
    }
  
  
    componentDidMount(){
      window.addEventListener("resize", this.updateDimensions);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  
    

    render() {
        let { cart, updateCart, isMobileFlag } = this.state;
        let { user } = this.props;
        if(window.location.href.indexOf("/vendor") != -1 && window.location.href.indexOf("payment") == -1){
            return (
                <div>
                        {this.props.children}
                </div>
            );
        }
        else if(window.location.href.indexOf("/seller") != -1){
                
          return (
            <div>
                <Header/>
                <div className="page_container pd-0">
                    {this.props.children}
                </div>
            </div>
        );
                
              
        }
        else{
          console.log("rendered again");
          return(
            <div className="App">
            <HeaderComponent user={user} cart={cart} updateCart={updateCart} isMobileFlag={isMobileFlag} />
            <VendorApp cart={cart} updateCart={updateCart} isMobileFlag={isMobileFlag} />
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

  
export default connect(mapStateToProps)(Layout);