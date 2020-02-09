    import { addToCart, removeCartItem } from "../../../actions/user_actions.js"; 
import ProdImg from "../../Product/prodImg.js";
import Product from "./Product.js";
    
    
    export default class Cart {

    constructor(cartProduct) {
        let product = null;
        
        this.productList = [];
        this.dbProductList = []; 
        if(cartProduct)
        {
            product = new Product(cartProduct.name, cartProduct.category.name, cartProduct.price, cartProduct.description, cartProduct.images[0].url, "", cartProduct.cases, cartProduct.cases, cartProduct.cases, "INR", cartProduct.oldprice, cartProduct._id, cartProduct.category, cartProduct.discount,cartProduct.cases, cartProduct);
            this.productList.push(product);         
        }
    }
    

    addItem=(product)=> {
        this.productList.push(product);
    }


    totalItemsInCart=()=>{
        return this.productList.length;
    }

    checkItemInCart = (product) => {
      var checkFlag = false;
      this.productList.filter(function(prod){
          if(prod.prodId == product.prodId){
           checkFlag = true;
          }
      });
      return checkFlag;
    }

    removeItem = (product) => {
     let count = 0;
     this.productList = this.productList.map(function(prod){
      if(prod.prodId == product.prodId && count == 0){
        count = count + 1;
        return;
      }
      else{
          return prod;
      }
     });
     this.productList = this.productList.filter(function(product){
         return (product);
     })
    }

    getParticularProductCount = (product) =>{
        let prodCount = 0;
        this.productList.forEach(function(prod){
            if(prod.prodId == product.prodId){
                prodCount += 1;
            }
        });
        return prodCount;
    }
    getTotalCartPrice = () => {
       let totalPrice = 0;
       this.productList.forEach(function(product){
           totalPrice = totalPrice + product.price;
       });
       return totalPrice;
    }

    // productExistsInCatalog(id) {
    //     return this.catalog.products.findIndex(pdt => {
    //         return pdt.id == id 
    //     }) == -1 ? false : true 
    // }

    // total() {
    //     let total = 0 
    //     for(let pdtId in this.items) {
    //         total += this.catalog.products.find(pdt => {
    //             return pdt.id == pdtId 
    //         }).price * this.items[pdtId]
    //     }   

    //     return total 
    // }
}

