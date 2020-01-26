import React, { Component } from "react";

export default class LocationModal extends Component{
      
    render(){
      let { closeModal } = this.props;
        return(
            <div onClick={closeModal} className="display--inline-block">
	<div className="location__overlay"></div>
	<div className="location__shake-container animated">
		<div className="location">
			<div>
				<div className="location-body">
					<div className="location-body__top-container">
						<div className="location-helper weight--semibold text-center">Where do you want the delivery?</div>
						<div className="location__selected">
							<div className="img location-body__selected-image">
								<div className="img-loader__wrapper__wrapper">
									<div className="img-loader__wrapper">
										<img className="img-loader__img img-loader__img--shown " alt="New Delhi" src="//webcdn.grofers.com/images/cities/delhi-8cb9a0a.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
									</div>
								</div>
							</div>
							<div className="location-body__selected-body">
								<div className="location-body__selected-title">Deliver in <span className="weight--semibold">New Delhi</span>
								</div><span className="location-body__right-arrow" data-test-id="location-right-arrow"></span>
							</div>
						</div>
					</div>
					<div className="location-body__bottom-container">
						<div className="location-body__bottom-wrapper">
							<div className="location__separator"><span className="separator-text">Or Select your city</span>
							</div>
							<div className="cities-container">
								<div className="cities-container__title">Top Searched Cities</div>
								<div className="cities-container-list">
									<div className="cities-container-list__item">
										<div className="img cities-container-list__item-img">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown " alt="Mumbai" src="/images/cities/mumbai-a310533.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
												</div>
											</div>
										</div>
										<div className="cities-container-list__item-name">Mumbai</div>
									</div>
									<div className="cities-container-list__item">
										<div className="img cities-container-list__item-img">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown " alt="Bengaluru" src="/images/cities/bengaluru-78062ed.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
												</div>
											</div>
										</div>
										<div className="cities-container-list__item-name">Bengaluru</div>
									</div>
									<div className="cities-container-list__item">
										<div className="img cities-container-list__item-img">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown " alt="Hyderabad" src="/images/cities/hyderabad-bafc7e9.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
												</div>
											</div>
										</div>
										<div className="cities-container-list__item-name">Hyderabad</div>
									</div>
									<div className="cities-container-list__item">
										<div className="img cities-container-list__item-img">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown " alt="Kolkata" src="/images/cities/kolkata-f960233.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
												</div>
											</div>
										</div>
										<div className="cities-container-list__item-name">Kolkata</div>
									</div>
									<div className="cities-container-list__item">
										<div className="img cities-container-list__item-img">
											<div className="img-loader__wrapper__wrapper">
												<div className="img-loader__wrapper">
													<img className="img-loader__img img-loader__img--shown " alt="Gurugram" src="/images/cities/gurugram-dcd6b56.png"/><span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden "></span>
												</div>
											</div>
										</div>
										<div className="cities-container-list__item-name">Gurugram</div>
									</div>
								</div>
							</div>
							<div className="location-autosuggest">
								<div className="location-autosuggest__select-container" data-test-id="location-input-box">
									<div className="relative"><span className="location-autosuggest__select-icon"></span>
										<div className="Select location-autosuggest__select is-searchable Select--single">
											<div className="Select-control">
												<div className="Select-multi-value-wrapper" id="react-select-2--value">
													<div className="Select-placeholder">Type your city (e.g Chennai, Pune)</div>
													
												</div><span className="Select-arrow-zone"><span className="Select-arrow"></span></span>
											</div>
										</div>
									</div>
								</div>
								<div className="location-autosuggest__button-container"><a className="location-autosuggest__button"><span className="location-autosuggest__button-icon"></span><span className="display--inline-block weight--normal">Detect</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        );
    }


}