import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Countries from './countries.js';

configure({adapter: new Adapter()});

describe('<Countries />', () => {
	let wrapper = null;

	beforeEach(() => {
		const countryList = [
		    {"name": "United States", "code": "US"},
		    {"name": "Canada", "code": "CA"}
	    ];
		 wrapper = shallow(<Countries countryList={countryList}/>);
	});


	it('should have default option', () => {
		expect(wrapper.contains(<option key='default' value="default">Select Country</option>)).toBeTruthy();
	});

	it('should have have Canada as an option in test', () => {
		expect(wrapper.contains(<option key='CA' value='CA'>Canada</option>)).toBeTruthy();
	});

	it('should have not have United States as an option in test', () => {
		expect(wrapper.contains(<option key='US' value='US'>United States</option>)).toBeFalsy();
	});
	
	it('should have three options in test', () => {
		expect(wrapper.find('option')).toHaveLength(2);
	});
});