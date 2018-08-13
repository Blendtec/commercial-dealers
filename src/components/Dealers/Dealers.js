import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import Dealer from './Dealer/Dealer';
import axios from '../../axios-dealer';
import './Dealers.css';
import DealersEnum from '../../enum/Dealer.enum.js';

class Dealers extends Component {
	state = {
		dealers: null
	}

  componentDidMount() {
    axios.get(this.props.requestURL)
      .then(res => {
        const dealers = res.data;
        this.setState({ dealers: dealers });
      })
      .catch(e => e);
  	
  }
  
  componentDidUpdate(prevProps) {
  	if(prevProps.requestURL !== this.props.requestURL) {
	    axios.get(this.props.requestURL)
	      .then(res => {
	        const dealers = res.data;
	        this.setState({ dealers: dealers });
	      })
	      .catch(e => e);
  	}
  }

	render() {
		let validDealer = false;
		let dealerTitle = null;
		let repTitle = null;
		let repArray = null;
		let dealersArray = null;
		let dealerClasses = null;
		let repClasses = null;
		if (this.state.dealers) {

			dealerClasses = 'large--one-quarter medium--one-half small--one-whole';

			repClasses = 'large--one-quarter medium--one-half small--one-whole';

			dealersArray = this.state.dealers.map(dealer => {
						if (dealer && !dealer.isRep && (dealer.phone || dealer.email || dealer.website)) {
							dealerTitle = (<div className="grid__item_center"><h4 className="left-align">{DealersEnum.DEALERS}</h4><hr /></div>);
							validDealer = true;
							return <Dealer key={dealer.id} dealer={dealer} dealerClasses={dealerClasses}/>
						} else {
							return null;
						}
					}).filter(dealer => {
						return Boolean(dealer);
					});

			repArray = this.state.dealers.map(rep => {
						if (rep && rep.isRep && (rep.phone || rep.email || rep.website)) {
							repTitle = (<div className="grid__item_center"><h4 className="left-align">{DealersEnum.REPS}</h4><hr /></div>);
							validDealer = true;
							return <Dealer key={rep.id} dealer={rep} dealerClasses={repClasses}/>
						} else {
							return null;
						}
					});
		}

		if (!validDealer) {
			dealersArray = <h3>{DealersEnum.NODEALERS}</h3>;
		}
		return (
			<Aux>
				<div className="grid grid-center-1200">
				{repTitle}
				{repArray}
				</div>
				<div className="grid grid-center-1200">
				{dealerTitle}
				{dealersArray}
				</div>
			</Aux>
		)
	}
}

export default Dealers;