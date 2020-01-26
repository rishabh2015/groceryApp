import React from 'react';
import "./assets/styles/main.css";
import DashBoardComponent from './modules/DashBoard/DashBoardComponent';



export default class VendorApp extends React.Component{
  
  constructor(props)
  {
    super(props);
  }
  updateDimensions= () => {
    var mobileFlag = (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i))? true: false;
    
    if(this.state &&  mobileFlag != this.state.isMobileFlag){
      this.setState({isMobileFlag: mobileFlag});
    }
  }


  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  
  render(){
    var { isMobileFlag, cart, updateCart } = this.props;
    
    return(
    <DashBoardComponent cart={cart} updateCart={updateCart} isMobileFlag={isMobileFlag} />
    );
  }
}


