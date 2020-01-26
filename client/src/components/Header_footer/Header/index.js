import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/user_actions';
import HeaderComponent from '../../vendor/modules/header/HeaderComponent';
import { update } from '../../utils/Form/formActions';

class Header extends Component {

    state = {
        page:[
            {
                name:'Home',
                linkTo:'/',
                public: true
            },
            {
                name:'Groceries',
                linkTo:'/shop',
                public: true
            },
            {
                name:'vendor',
                linkTo:'/vendor',
                public: true
            }
        ],
        user:[
            {
                name:'My Cart',
                linkTo:'/seller/user/cart',
                public: false
            },
            {
                name:'My Account',
                linkTo:'/seller/user/dashboard',
                public: false
            },
            {
                name:'Log in',
                linkTo:'/seller/register_login',
                public: true
            },
            {
                name:'Log out',
                linkTo:'/seller/user/logout',
                public: false
            },
        ]
    }


    logoutHandler = () => {
        this.props.dispatch(logoutUser()).then(response =>{
            if(response.payload.success){
                this.props.history.push('/')
            }
        })
    }


    cartLink = (item,i) => {
        const user = this.props.user.userData;

        return (
            <div className="cart_link" key={i}>
                <span>{user.cart ? user.cart.length:0}</span>
                <Link to={item.linkTo}>
                    {item.name}
                </Link>
            </div>
        )
    }


    defaultLink = (item,i) => (
        item.name === 'Log out' ?
            <div className="log_out_link"
                key={i}
                onClick={()=> this.logoutHandler()}
            >
                {item.name}
            </div>

        :
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    )


    showLinks = (type) =>{
        let list = [];

        if(this.props.user.userData){
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item)
                    }
                } else{
                    if(item.name !== 'Log in'){
                        list.push(item)
                    }
                }
            });
        }

        return list.map((item,i)=>{
            if(item.name !== 'My Cart'){
                return this.defaultLink(item,i)
            } else {
                return this.cartLink(item,i)
            }
            
        })
    }  

    render() {
        let { cart,updateCart ,isMobileFlag } = this.props;
        return (
            <header className="header header--black">
   <div className="header__left">
      <div className="header-item header-item__icon"><a className="header-item__content" href="/">
        {"Grocery"}</a></div>
   </div>
   </header>
        );
        
    }
}

function mapStateToProps(state){
    return {
        user: state.user
        
    }
}

export default connect(mapStateToProps)(withRouter(Header));