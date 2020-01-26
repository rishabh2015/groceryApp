import React,  { Component } from "react";
import CategoriesWidget from "./Desktop/CategoriesWidget";
import BannerWidget from "./Desktop/BannerWidget";
import BestSellingItems from "./Desktop/BestSellingItems";
import TopSaversToday from "./Desktop/TopSaversToday";
import CategoriesContainer from "./Desktop/CategoriesContainer";
import BannerWidgetMobile from "./Mobile/BannerWidgetMobile";
import BestSellingItemsMobile from "./Mobile/BestSellingItemsMobile";
import TopSaversTodayMobile from "./Mobile/TopSaversTodayMobile";
import CategoriesContainerMobile from "./Mobile/CategoriesContainerMobile";
import { productList } from "../../productResponse";
import Product from "../../Modals/Product";
import SecondaryBannerWidget from "./Mobile/SecondaryBannerWidget";


export default class DashBoardComponent extends Component{
    constructor(props){
       super(props);
       let productObjectList = productList.map(function(product){
        return new Product(product.name,product.type,product.price,product.line_1,product.image_url,product.action,product.mrp,product.mrp, product.rating,product.unit,product.inventory,"INR",product.mrp,product.product_id,product.level1_category[0],product.offer,product.price - product.sbc_price,product.inventory);
       });
       this.state={
           productObjectList:productObjectList
       };

    }
    render(){
        var { isMobileFlag,cart,updateCart } = this.props;
        var { productObjectList } = this.state;
        if(isMobileFlag){
        return(
            <div className="page-home">
                <div className="store-wrapper">
                    <div className="wrapper">
                        {/* <div className="store-card-container">
                            <CategoriesWidgetMobile  />
                        </div> */}
                         <BannerWidgetMobile  />
                         <BestSellingItemsMobile productList={productObjectList} cart={cart} updateCart={updateCart} />
                         <SecondaryBannerWidget />
                         <TopSaversTodayMobile productList={productObjectList} cart={cart} updateCart={updateCart} />
                         <CategoriesContainerMobile  />
                    </div>
                  </div>
            </div>
        )
        }
        else{
            return(
                <div className="page-home">
                    <div className="store-wrapper">
                        <div className="wrapper">
                            <div className="store-card-container">
                                <CategoriesWidget  />
                            </div>
                             <BannerWidget  />
                             <BestSellingItems productList={productObjectList} cart={cart} updateCart={updateCart} />
                             <TopSaversToday productList={productObjectList} cart={cart} updateCart={updateCart} />
                             <CategoriesContainer  />
                        </div>
                      </div>
                </div>
            )
        }
    }
}