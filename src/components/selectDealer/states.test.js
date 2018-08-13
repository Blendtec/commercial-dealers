import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import States from './states.js';

configure({adapter: new Adapter()});

describe('<States />', () => {
	let wrapper = null;

	beforeEach(() => {
	const stateList = [
	    {"short": "AL", "name": "Alabama", "country": "US", "region": "", "alt": []},
	    {"short": "AK", "name": "Alaska", "country": "US", "region": "", "alt": []}
	    ];
		 wrapper = shallow(<States stateList={stateList}/>);
	});


	it('should have default option', () => {
		expect(wrapper.contains(<option key='default' value="default">Select State</option>)).toBeTruthy();
	});

	it('should have have alabama as an option in test', () => {
		expect(wrapper.contains(<option key='AL' value="AL">Alabama</option>)).toBeTruthy();
	});
	
	it('should have three options', () => {
		expect(wrapper.find('option')).toHaveLength(3);
	});
});