import React from 'react';
import PropTypes from 'prop-types';

const dealer = (props) => {
  let webLink = props.website;

  if (props.website && !webLink.match('http')) {
    webLink = `http://${webLink}`;
  }
  let name = (
    <h4 className="left-align">
      <a rel="noopener noreferrer" target="_blank" href={webLink}>
        {props.name}
      </a>
    </h4>);
  if (!props.website) {
    name = <h4 className="left-align">{props.name}</h4>;
  }
  let contact = null;
  if (props.contact) {
    contact = <p><i className="fa fa-address-card" />&#160;{ props.contact}</p>;
  }
  let address1 = null;
  if (props.address1) {
    address1 = <p><i className="fa fa-map-marker" />&#160;{ props.address1}</p>;
  }
  let address2 = null;
  if (props.address2) {
    address2 = <p>&#160;&#160;{ props.address2}</p>;
  }
  let addressAdv = null;
  if (props.city && props.stateCode && props.zip) {
    addressAdv = <p>&#160;&#160;{ props.city}, { props.stateCode} {props.zip}</p>;
  }
  let phone = null;
  if (props.phone) {
    phone = <p><i className="fa fa-phone" /> <a href={`tel://${props.phone}`} title={props.phone}>{props.phone}</a></p>;
  }
  let fax = null;
  if (props.fax) {
    fax = <p><i className="fa fa-fax">&#160;</i> {props.fax}</p>;
  }
  let website = null;
  if (props.website) {
    website = (<p style={{ fontSize: '.8em' }}><a rel="noopener noreferrer" target="_blank" href={webLink}>{props.linkText ? props.linkText : props.website}</a></p>);
  }
  let streetAddress = null;
  if (props.streetAddress) {
    streetAddress = (<p>{props.streetAddress}</p>);
  }
  let nativeName = null;
  if (props.nativeName) {
    nativeName = <h4>{props.nativeName}</h4>;
  }
  let nativeStreetAddress = null;
  if (props.nativeStreetAddress) {
    nativeStreetAddress = <p>{props.nativeStreetAddress}</p>;
  }
  const classes = `left-align grid__item grid__item_center ${props.dealerClasses}`;
  return (
    <div className={classes} style={{ height: '400px' }}>
      {name}
      {nativeName}
      {contact}
      {streetAddress}
      {nativeStreetAddress}
      {address1}
      {address2}
      {addressAdv}
      {phone}
      {fax}
      {website}
    </div>
  );
};

dealer.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  dealerClasses: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  stateCode: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  nativeStreetAddress: PropTypes.string.isRequired,
};

export default dealer;
