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
import { getProductsToShop }  from "../../../../actions/products_actions"; 
import { connect } from "react-redux";

class DashBoardComponent extends Component{
    constructor(props){
       super(props);
       this.state={
           productObjectList:[]
       };
    }

    componentDidMount(){
        this.props.dispatch(getProductsToShop()).then((response)=>{
           let productObjectList =  response.payload.articles.map((article)=>{
               return new Product(article.name, 
                                  article.category.name,
                                  article.price, 
                                  article.description,
                                  article.images[0].url,
                                  productList[0].action, 
                                  productList[0].rating,
                                  productList[0].unit,
                                  article.case,
                                  "INR",
                                  article.oldprice,
                                  article._id,
                                  article.category,
                                  article.discount+"% OFF",
                                  article.case,
                                  article);

            });
            this.setState({productObjectList:productObjectList});
        });
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


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(DashBoardComponent);