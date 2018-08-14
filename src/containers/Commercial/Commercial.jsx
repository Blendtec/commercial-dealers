import React, { Component } from 'react';
import axios from '../../axios-info';
import Aux from '../../hoc/Aux/Aux';
import States from '../../components/selectDealer/states';
import Countries from '../../components/selectDealer/countries';
import Dealers from '../../components/Dealers/Dealers';
import CommercialEnum from '../../enum/Commercial.enum';

class Commercial extends Component {

	state = {
		states: null,
		valueOfState: CommercialEnum.DEFAULT,
		countries: null,
		valueOfCountry: CommercialEnum.DEFAULT,
		dealers: null,
		requestURL: null,
		isMounted: false
	}

  componentDidMount() {
    axios.get(CommercialEnum.STATESURL)
      .then(res => {
	        const states = res.data;
	        this.setState({ states: states });
      })
      .catch(e => e);
    axios.get(CommercialEnum.COUNTRIESURL)
      .then(res => {
	        const countries = res.data;
	        this.setState({ countries: countries });
      })
      .catch(e => e);
  }

  componentWillUnmount() {
  	this.unmounted = true;
  }

  changeStateHandler = (event) => {
  	let requestURL = null;
  	if (event.target.value !== 'default') {
  		requestURL = CommercialEnum.RESIDENTIALURL + event.target.value;
  	}
  	this.setState({
  		valueOfState: event.target.value,
  		requestURL: requestURL
  	})
  }

  changeCountryHandler = (event) => {
  	let requestURL = null;
  	if (event.target.value !== 'default') {
  		requestURL = CommercialEnum.INTERNATIONALURL + event.target.value;
  	}
  	this.setState({
  		valueOfCountry: event.target.value,
  		requestURL: requestURL
  	})
  }
	render() {
		let statesSelect = null;
		let dealersInfo = null;
		let countriesSelect = null;
		if (this.state.states) {
			statesSelect = (
				<div className="select-wrapper-padding grid__item grid__item_center large--one-half medium--one-half">
				<div className="grid">
					<div className="grid__item large--one-half medium--one-half small--one-half">
					<h4 className="select-title">{CommercialEnum.USA}</h4>
					<hr className="accent"/>
					</div>
					<div className="grid__item large--one-half medium--one-half small--one-half">
					<States value={this.state.valueOfState} changed={(event) => this.changeStateHandler(event)} stateList={this.state.states}/>
					</div>
				</div>
				</div>
				);
		}
					
		if (this.state.countries) {
			countriesSelect = (
				<div className="select-wrapper-padding grid__item grid__item_center large--one-half medium--one-half">
				<div className="grid">
					<div className="grid__item large--one-half medium--one-half small--one-half">
					<h4 className="select-title">{CommercialEnum.INTERNATIONAL}</h4>
					<hr className="accent"/>
					</div>
					<div className="grid__item large--one-half medium--one-half small--one-half">
					<Countries value={this.state.valueOfCountry} changed={(event) => this.changeCountryHandler(event)} countryList={this.state.countries}/>
					</div>
				</div>
				</div>
				);
		}
		if (this.state.requestURL) {
			dealersInfo = <Dealers requestURL={this.state.requestURL}/>;
		}
		return (
			<Aux>
				<div className="grid grid-center-1200" >
					{statesSelect}
					{countriesSelect}
				</div>
				{dealersInfo}
			</Aux>
		);
	}
}

export default Commercial;