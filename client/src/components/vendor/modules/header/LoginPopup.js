import React, { Component } from "react";
import { Link, withRouter} from 'react-router-dom';

import { logoutUser } from '../../../../actions/user_actions';
import { connect } from "react-redux";

export default class LoginPopup extends Component{
    

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(response =>{
        if(response.payload.success){
            this.props.history.push('/')
        }
    })
}
    render(){
      if(Object.keys(this.props.user).length == 0){
    return(
          <div className="account-dd">
          <div className="account-close-btn display--inline-block@mobile"></div>
          <button className="btn btn--account-login weight--semibold" data-test-id="login-or-sign-up">Login or Sign Up For Buyer</button>
          <Link to="/seller/register_login"><button className="btn btn--account-login weight--semibold" data-test-id="login-or-sign-up seller">Login or Sign Up For Seller</button></Link>
          </div>
        );
    }
  
  else{
    return(
      <div className="account-dd">
      <div className="account-close-btn display--inline-block@mobile"></div>
      <Link to="/seller/user/dashboard"><button className="btn btn--account-login weight--semibold" data-test-id="login-or-sign-up seller">Go to Seller Dashboard</button></Link>
      <a onClick={this.logoutHandler}><button className="btn btn--account-login weight--semibold" data-test-id="login-or-sign-up seller">Logout </button></a>
      </div>
    );
  }
}
}

