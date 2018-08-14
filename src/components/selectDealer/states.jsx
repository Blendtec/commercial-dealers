import React from 'react';
import SelectEnum from '../../enum/Select.enum';

const states = (props) => {
  const stateOptions = props.stateList.map((state) => {
    if (state.country === SelectEnum.USCODE) {
      return (
        <option key={state.short} value={state.short}>
          {state.name}
        </option>
      );
    }
    return null;
  });
  return (
    <select className="input-full" onChange={props.changed} value={props.value}>
      <option key={SelectEnum.DEFAULT} value={SelectEnum.DEFAULT}>{SelectEnum.SELECTSTATES}</option>
      {stateOptions}
    </select>
  );
};

export default states;
