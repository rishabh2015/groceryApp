import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import Shop from './components/Shop';
import ProductPage from './components/Product';

import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';
import ManageSubCategories from './components/User/Admin/manage_subcategories';
import ManageBrands from "./components/User/Admin/manage_brands";
import UserCart from './components/User/cart';
import UpdateProfile from './components/User/update_profile';
import VendorApp from "./components/vendor/App";

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/seller/user/dashboard" exact component={Auth(UserDashboard,true)}/>
        <Route path="/seller/user/cart" exact component={Auth(UserCart,true)}/>
        <Route path="/seller/user/user_profile" exact component={Auth(UpdateProfile,true)}/>
        <Route path="/seller/admin/add_product" exact component={Auth(AddProduct,true)}/>
        <Route path="/seller/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>
        <Route path="/seller/admin/manage_subcategories" exact component={Auth(ManageSubCategories,true)}/>
        <Route path="/seller/admin/manage_brands" exact component={Auth(ManageBrands,true)}/>


        <Route path="/seller/product_detail/:id" exact component={Auth(ProductPage,null)}/>
        <Route path="/seller/register" exact component={Auth(Register,false)}/>
        <Route path="/seller/register_login" exact component={Auth(RegisterLogin,false)}/>
        <Route path="/seller/shop" exact component={Auth(Shop,null)}/>
        <Route path="/vendor" exact component = {VendorApp} />
        <Route path="/" exact component={Auth(Home,null)}/>
      
      </Switch>
    </Layout>

  )
}

export default Routes;
