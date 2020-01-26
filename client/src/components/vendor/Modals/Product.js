export default class Product{
    constructor(name="", type="", price="", description="", imgUrl="", prodDetailUrl="",
                height="", width="", rating="", measuringUnit="", minQuantity="", currentCurrency="INR",
                mrp="", prodId="", category="", percentDiscount="", moneyDiscount="", inventory=""){
        this.name = name;
        this.type = type;
        this.price = price;
        this.prodId = prodId;
        this.category = category;
        this.description = description;
        this.imgUrl = imgUrl;
        this.prodDetailUrl = prodDetailUrl;
        this.height = height;
        this.width = width;
        this.rating = rating;
        this.mrp = mrp;
        this.measuringUnit = measuringUnit;
        this.minQuantity = minQuantity;
        this.currentCurrency = currentCurrency;
        this.percentDiscount = percentDiscount;
        this.moneyDiscount = moneyDiscount;
        this.inventory = inventory;
    }

    getPrice= () => {
        return this.price;
    }

    getName = () => {
        return this.name;
    }

    getMeasuringUnit = () => {
        return this.measuringUnit;
    }

    getCurrentCurrency = () =>{
        return this.currentCurrency;
    }

    getMinQunatity = () => {
        return this.minQuantity;
    }

    getDescription = () => {
        return this.description;
    }

    getImgUrl = () => {
        return this.imgUrl;
    }

    getMoneyDiscount = () => {
        return this.moneyDiscount;
    }

    getPercentDiscount = () => {
        return this.percentDiscount;
    }

    getRating = () => {
        return this.rating;
    }

    getProdId = () => {
        return this.prodId;
    }
}
