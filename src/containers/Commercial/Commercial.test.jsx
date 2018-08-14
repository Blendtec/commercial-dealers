import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Commercial from './Commercial';
import axios from '../../axios-info';
import MockAdapter from 'axios-mock-adapter';
import States from '../../components/selectDealer/states';
import Countries from '../../components/selectDealer/countries';
import CommercialEnum from '../../enum/Commercial.enum';

configure({ adapter: new Adapter() });

describe('<Commercial />', () => {
  let wrapper = null;
  const statesJson = [
			    { short: 'AL', name: 'Alabama', country: 'US', region: '', alt: [] },
			    { short: 'AK', name: 'Alaska', country: 'US', region: '', alt: [] },
		    ];
  const countriesJson = [
			    { name: 'United States', code: 'US' },
			    { name: 'Canada', code: 'CA' },
		    ];
  const statesURL = CommercialEnum.STATESURL;
  const countriesURL = CommercialEnum.COUNTRIESURL;
  beforeEach(async () => {
    const mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet(statesURL).reply(200, statesJson);
    mock.onGet(countriesURL).reply(200, countriesJson);
    wrapper = shallow(<Commercial />);
  });


  it('should load states json data', () => {
    expect(wrapper.state('states')).toEqual(statesJson);
  });

  it('should load states json data', () => {
    expect(wrapper.state('countries')).toEqual(countriesJson);
  });

  it('changeStateHandler should change selected state', () => {
    wrapper.instance().changeStateHandler({ target: { value: 'UT' } });
    expect(wrapper.state('valueOfState')).toBe('UT');
    expect(wrapper.state('requestURL')).toBe('dealers/residential/UT');
  });

  it('changeCountryHandler should change selected country', () => {
    wrapper.instance().changeCountryHandler({ target: { value: 'DE' } });
    expect(wrapper.state('valueOfCountry')).toBe('DE');
    expect(wrapper.state('requestURL')).toBe('dealers/international/DE');
  });

  it('should contain <States /> component', () => {
    expect(wrapper.find(States)).toHaveLength(1);
  });

  it('should contain <Countries /> component', () => {
    expect(wrapper.find(Countries)).toHaveLength(1);
  });
});
