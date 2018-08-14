import React from 'react';
import SelectEnum from '../../enum/Select.enum';

const countries = (props) => {
  const countryOptions = props.countryList.map((country) => {
    if (country.code !== SelectEnum.USCODE) {
      return (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      );
    }
    return null;
  });
  return (
    <select className="input-full" onChange={props.changed} value={props.value}>
      <option key={SelectEnum.DEFAULT} value={SelectEnum.DEFAULT}>{SelectEnum.SELECTCOUNTRY}</option>
      {countryOptions}
    </select>
  );
};

export default countries;
