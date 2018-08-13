import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dealer from './Dealer.js';

configure({adapter: new Adapter()});

describe('<Dealer />', () => {
	let wrapper = null;

	beforeEach(() => {
		const countryList = {"id":4,"name":"Premier Equipment Group, Inc.","nativeName":"","streetAddress":"","nativeStreetAddress":"","address1":"106 Battery Point Place","address2":"","city":"Cary","stateCode":"TN","locations":"state-AL","zip":"37090","email":"michaelpav@nc.rr.com","phone":"(919) 454-4199","fax":"","countryCode":"US","isRep":true,"website":"http://www.premierequip.com","linkText":"http://www.premierequip.com","registrationUri":"","contact":"Michael Pavelka"};
		 wrapper = shallow(<Dealer dealer={countryList}/>);
	});

	it('should have name', () => {
		expect(wrapper.contains(<h4 className="left-align"><a target="_blank" href="http://www.premierequip.com">Premier Equipment Group, Inc.</a></h4>)).toBeTruthy();
	});

	it('should have Contact Name', () => {
		expect(wrapper.contains(<p><i className="fa fa-address-card"></i>&nbsp;Michael Pavelka</p>)).toBeTruthy();
	});

	it('should have Address1', () => {
		expect(wrapper.contains(<p><i className="fa fa-map-marker"></i>&#160;106 Battery Point Place</p>)).toBeTruthy();
	});

	it('should have City, State, and Zipcode', () => {
		expect(wrapper.contains(<p>&nbsp;&nbsp;Cary, TN 37090</p>)).toBeTruthy();
	});

	it('should have phone number', () => {
		expect(wrapper.contains(<p><i className="fa fa-phone"></i> <a href="tel://(919) 454-4199" title="(919) 454-4199">(919) 454-4199</a></p>)).toBeTruthy();
	});

	it('should have website', () => {
		expect(wrapper.contains(<p style={{fontSize: '.8em'}}><a target="_blank" href="http://www.premierequip.com">http://www.premierequip.com</a></p>)).toBeTruthy();
	});
});


