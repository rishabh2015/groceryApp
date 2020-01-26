import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion'
import CardBlock from '../utils/card_block';

import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../actions/products_actions';
import VendorApp from "../../components/vendor/App";

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        console.log("user in here", this.props.user);
        return (
            <div>
                <VendorApp />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        user : state.user
    }
}

export default connect(mapStateToProps)(Home);