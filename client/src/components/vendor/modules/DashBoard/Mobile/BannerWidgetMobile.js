import React, { Component } from "react";
import Slider  from "react-slick";
function CarouselNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="slider__arrow store-offers__arrow--next d-none">
            <div className="slider__arrow--nav slider__arrow--right icon-angle-bracket-right slider__arrow--circle" title="Next Image" aria-label="Next Image"></div>
        </button>
    );
  }
  
  function CarouselPrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="slider__arrow store-offers__arrow--prev d-none">
            <div className="slider__arrow--nav slider__arrow--left icon-angle-bracket-left slider__arrow--circle" onClick={onClick} title="Previous Image" aria-label="Previous Image"></div>
            </button>
    );
  }


export default class BannerWidgetMobile extends Component{

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 2,
            nextArrow: <CarouselNextArrow />,
            prevArrow: <CarouselPrevArrow />
          };
    return(<div className="store-card">
	<div className="store-offers relative">
		<div className="slick-slider slick-initialized" dir="ltr">
			<Slider {...settings} >
					<div data-index="-1" tabindex="-1" className="slick-slide slick-cloned slide-slide-width" aria-hidden="true" >
						<div>
							<div className="store-offers__offer" tabindex="-1">
								<a href="https://grofers.com/sbc-landing">
									<div className="img-loader__wrapper__wrapper">
										<div className="img-loader__wrapper">
											<img className="img-loader__img img-loader__img--shown img display--inline-block" alt="" src="//cdn.grofers.com/app/images/promotions/merchant/1563859179_sbc-revamp-web.jpg"/>
												<span className="img-loader__placeholder img-loader__img img-loader__img--hidden img-loader__placeholder--banner"></span>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div data-index="0" className="slick-slide slick-active slick-current slide-slide-width" tabindex="-1" aria-hidden="false">
							<div>
								<div className="store-offers__offer" tabindex="-1" >
									<a href="https://grofers.com/cln/deals/clid/5dc91dc16a4eaf001231c160">
										<div className="img-loader__wrapper__wrapper">
											<div className="img-loader__wrapper">
												<img className="img-loader__img img-loader__img--shown img display--inline-block" alt="Nov 20_Nov 20_Retail_Bachat Sale_Biscuits, Snacks &amp; Chocolates" src="//cdn.grofers.com/app/images/promotions/merchant/1574146922_3411_BS_Super5_web.jpg"/>
													<span className="img-loader__placeholder img-loader__img img-loader__img--hidden img-loader__placeholder--banner"></span>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div data-index="1" className="slick-slide slide-slide-width" tabindex="-1" aria-hidden="true">
								<div>
									<div className="store-offers__offer" tabindex="-1" >
										<a href="https://grofers.com/sbc-landing">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown img display--inline-block" alt="" src="//cdn.grofers.com/app/images/promotions/merchant/1563859179_sbc-revamp-web.jpg"/>
														<span className="img-loader__placeholder img-loader__img img-loader__img--hidden img-loader__placeholder--banner"></span>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div data-index="2" tabindex="-1" className="slick-slide slick-cloned slide-slide-width" aria-hidden="true" >
									<div>
										<div className="store-offers__offer" tabindex="-1" >
											<a href="https://grofers.com/cln/deals/clid/5dc91dc16a4eaf001231c160">
												<div className="img-loader__wrapper__wrapper">
													<div className="img-loader__wrapper">
														<img className="img-loader__img img-loader__img--shown img display--inline-block" alt="Nov 20_Nov 20_Retail_Bachat Sale_Biscuits, Snacks &amp; Chocolates" src="//cdn.grofers.com/app/images/promotions/merchant/1574146922_3411_BS_Super5_web.jpg"/>
															<span className="img-loader__placeholder img-loader__img img-loader__img--hidden img-loader__placeholder--banner"></span>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div data-index="3" tabindex="-1" className="slick-slide slick-cloned slide-slide-width" aria-hidden="true" >
										<div>
											<div className="store-offers__offer" tabindex="-1" >
												<a href="https://grofers.com/sbc-landing">
													<div className="img-loader__wrapper__wrapper">
														<div className="img-loader__wrapper">
															<img className="img-loader__img img-loader__img--shown img display--inline-block" alt="" src="//cdn.grofers.com/app/images/promotions/merchant/1563859179_sbc-revamp-web.jpg"/>
																<span className="img-loader__placeholder img-loader__img img-loader__img--hidden img-loader__placeholder--banner"></span>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
                                        </Slider>
									</div>
								</div>
							</div>
						)
    }
}

