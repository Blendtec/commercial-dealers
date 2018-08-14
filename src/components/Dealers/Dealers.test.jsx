import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dealers from './Dealers';
import Dealer from './Dealer/Dealer';
import axios from '../../axios-dealer';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

describe('<Dealers />', () => {
  let wrapper = null;
  const dealersList = [
			{ id: 62, name: 'Silver Eagle Marketing', nativeName: '', streetAddress: '', nativeStreetAddress: '', address1: '6750 Baymeadow Drive', address2: '', city: 'Glen Burnie', stateCode: 'MD', locations: 'state-DC', zip: '21060', email: 'kevin@silvereaglemarketing.com', phone: '(443) 891-1500', fax: '(443) 891-1501', countryCode: 'US', isRep: true, website: 'http://www.silvereaglemarketing.com', linkText: 'http://www.silvereaglemarketing.com', registrationUri: '', contact: 'Kevin Dietz' },
  ];

  const requestURL = 'http://thisisatest.com/test.json';
  beforeEach(async () => {
    const mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet(requestURL).reply(200, dealersList);
    wrapper = shallow(<Dealers requestURL={requestURL} />);
  });

  it('should call axios to load dealers based on requestURL', () => {
    expect(wrapper.state('dealers')).toEqual(dealersList);
  });

  it('should have one Dealer in test', () => {
    expect(wrapper.find(Dealer)).toHaveLength(1);
  });
});
