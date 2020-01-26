import React, {Component} from 'react';
import CartModal from "../Modals/CartModal";
import LocationModal from "./LocationModal";
import LoginPopup from './LoginPopup';
import { connect } from "react-redux";
import Header from '../../../Header_footer/Header';
import { withRouter, Link } from "react-router-dom";

 class HeaderComponent extends Component{

	constructor(props)
	{
		super(props);
		var { isMobileFlag, cart, user } = props;
		var itemCount = cart ? cart.totalItemsInCart(): 0; 
		this.state = {
		  isMobileFlag : isMobileFlag,
		  itemCount: itemCount,
		  cartModalFlag : false,
		  locationModal:{
			  show: false,
			  toggleModal: ()=>{this.state.locationModal.show = !this.state.locationModal.show;this.setState({});}
		  },
		  loginModal:{
			  show: false,
			  toggleModal: ()=>{this.state.loginModal.show = !this.state.loginModal.show;this.setState({});},
			  user: user
		  }
		}
	}

	handleOpenModal = () =>{
	 this.setState({cartModalFlag: !this.state.cartModalFlag});	
	}

	componentWillReceiveProps(nextProps)
	{
     if (nextProps.cart && nextProps.cart.totalItemsInCart() != this.state.itemCount){
		let cart = nextProps.cart;
		this.setState({itemCount: cart.totalItemsInCart()});
	 }
	 else if(nextProps.isMobileFlag != this.state.isMobileFlag){
      this.setState({isMobileFlag: nextProps.isMobileFlag});
	 }
	}

    render(){
      
	  let{ isMobileFlag, itemCount, cartModalFlag, locationModal, loginModal } = this.state;
	  
	  let { handleOpenModal } = this;
	  let { cart } = this.props;
      if(!isMobileFlag){
        return(
            <header className="header header--black">
   <div className="header__left">
		<div className="header-item header-item__icon"><Link className="header-item__content" to="/">{"Grocery"}</Link></div>
      <a className="header-item header-item--address" onClick={locationModal.toggleModal} >
         <div className="header-item__label">Your Location</div>
         <div className="user-address" data-test-id="location-tab" title="New Delhi">New Delhi</div>
	 </a>
   </div>
   
   {locationModal.show ? <LocationModal closeModal={locationModal.toggleModal}  />:""}
   <div className="header__sub">
      <div className="search">
         <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-search" aria-expanded="false" className="react-autosuggest__container">
            <div className="search__box" data-test-id="search-box"><input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-search" className="react-autosuggest__input" placeholder="Search for products" value=""/><button className="btn search__btn"></button></div>
            <div id="react-autowhatever-search" role="listbox" className="react-autosuggest__suggestions-container"></div>
         </div>
      </div>
   </div>
   <div className="header__right">
      <div className="header-item header-item--my-account" data-amp-on="tap:AMP.setState({ui: {showAccountModal: true}})" role="presentation" tabindex="-1">
         <a onClick={loginModal.toggleModal} className="account header-item__content">
            <div className="account-wrapper">
               <div className="account__my-account hide@mobile display--none@mobile" data-test-id="my-account-header">
                  My Account
                  <div  className="account__login">Login/Sign Up</div>
               </div>
            </div>
         </a>
      </div>
	  <div  onClick={handleOpenModal} className="header-item"><div className="shopping-cart shopping-cart--empty" data-test-id="cart-icon">
	  {(itemCount > 0)?
	  <span><span className="item-count" data-test-id="item-in-cart">{itemCount}</span>
	  <span className="item-cart-total display--none@mobile">{"₹ "+cart.getTotalCartPrice()}</span>
	  </span>:
       <span className="display--none@mobile">My Cart</span>}
		  </div>
	  </div>
   </div>
   {cartModalFlag ? <CartModal modalOpen ={cartModalFlag} cartObj = {cart} itemCount = {itemCount} />:""}
	  <span>{loginModal.show ?<LoginPopup user={loginModal.user} />:""}</span>
</header>
        );
      }
      else{
         return(
            <header className="header header--black" >
	<div className="header__left">
		<div className="header-item header-item__icon header-item__icon--side-nav" data-test-id="header-side-nav"><span></span><span></span><span></span>
		</div>
		<a className="header-item header-item--address" data-amp-on="tap:AMP.setState({ui: {showLocationSelectModal: true}})">
			<div className="header-item__label">Your Location</div>
			<div className="user-address" data-test-id="location-tab" title="New Delhi">New Delhi</div>
		</a>
	</div>
	<div className="header__sub">
		<div className="header__sub--offers" data-test-id="header-offers">Offers</div>
		<div className="search">
			<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-search" aria-expanded="false" className="react-autosuggest__container">
				<div className="search__box" data-test-id="search-box">
					<input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-search" className="react-autosuggest__input" placeholder="Search for products" value=""/>
					<button className="btn search__btn"></button>
				</div>
				<div id="react-autowhatever-search" role="listbox" className="react-autosuggest__suggestions-container"></div>
			</div>
		</div>
	</div>
	<div className="header__right">
		<div className="header-item">
		 <div className="shopping-cart shopping-cart--empty" data-test-id="cart-icon">
			 {(itemCount > 0)?<span><span className="item-count" data-test-id="item-in-cart">{itemCount}</span><span className="item-cart-total display--none@mobile">{"₹ "+cart.getTotalCartPrice()}</span></span>:""}
			</div>
		</div>
	</div><span></span>
	<div className="side-nav__container">
		<div className="side-nav">
			<a data-test-id="side-nav-sbc-link" href="/sbc-landing">
				<div className="side-nav__sbc-link">
					<img src="//webcdn.grofers.com/images/sbc/sbc-member-300a056.png" alt="sbc-member" className="side-nav__sbc-image display--inline-block"/>
					<div className="display--inline-block vertical-align--middle">
						<div className="side-nav__sbc-title">Smart Bachat Club</div>
						<div className="side-nav__sbc-text">Exclusive Wholesale prices</div>
					</div>
				</div>
				<div className="side-nav__sbc-arrow"></div>
			</a>
			<ul className="side-nav__section-items">
				<li className="side-nav__section-items--item side-nav__section-title section-title__welcome"><span data-test-id="welcome-text">Welcome</span>
				</li>
				<a data-test-id="login-btn">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-login">Login</li>
					</div>
				</a>
				<a data-test-id="my-addresses">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-addresses side-nav__auth_disabled">My Addresses</li>
					</div>
				</a>
				<a data-test-id="my-orders">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-orders side-nav__auth_disabled">My Orders</li>
					</div>
				</a>
				<a data-test-id="my-cart" href="/cart">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-cart">My Cart<span className="side-nav__cart-item-count" data-test-id="cart-item-count">1</span>
						</li>
					</div>
				</a>
				<a data-test-id="my-wallet">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-wallet side-nav__auth_disabled">My Wallet</li>
					</div>
				</a>
				<a data-test-id="offers" href="/offers">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-offers">Offers</li>
					</div>
				</a>
			</ul>
			<ul className="side-nav__section-items">
				<li className="side-nav__section-items--item side-nav__section-title section-title__others">Others</li>
				<a href="/faq" data-test-id="">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-login">FAQ</li>
					</div>
				</a>
				<a href="/aboutus" data-test-id="">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-addresses">About us</li>
					</div>
				</a>
				<a href="/terms" data-test-id="">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-orders">Terms and Conditions</li>
					</div>
				</a>
				<a href="/blog" data-test-id="">
					<div className="display--block">
						<li className="side-nav__section-items--item side-nav__item-cart">Blog</li>
					</div>
				</a>
			</ul>
		</div>
	</div>
</header>
         );
      }
    }
}

function mapStateToProps(state){
	return {
		user: state.user
		
	}
  }
export default connect(mapStateToProps)(withRouter(HeaderComponent));