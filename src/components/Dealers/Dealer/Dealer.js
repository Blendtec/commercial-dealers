import React from 'react'

const dealer = (props) => {
	let webLink = props.dealer.website;

	if (props.dealer.website && !webLink.match('http')) {
		webLink = 'http://' + webLink;
	}
	let name = <h4 className="left-align"><a target="_blank" href={webLink}>{props.dealer.name}</a></h4>;
	if (!props.dealer.website) {
		name = <h4 className="left-align">{props.dealer.name}</h4>
	}
	let contact = null;
	if (props.dealer.contact) {
		contact = <p><i className="fa fa-address-card"></i>&#160;{ props.dealer.contact}</p>;
	}
	let address1 = null;
	if (props.dealer.address1) {
		address1 = <p><i className="fa fa-map-marker"></i>&#160;{ props.dealer.address1}</p>;
	}
	let address2 = null;
	if (props.dealer.address2) {
		address2 = <p>&#160;&#160;{ props.dealer.address2}</p>;
	}
	let addressAdv = null;
	if (props.dealer.city && props.dealer.stateCode && props.dealer.zip) {
		addressAdv = <p>&#160;&#160;{ props.dealer.city}, { props.dealer.stateCode} {props.dealer.zip}</p>;
	}
	let phone = null;
	if (props.dealer.phone) {
		phone = <p><i className="fa fa-phone"></i> <a href={'tel://' + props.dealer.phone} title={props.dealer.phone}>{props.dealer.phone}</a></p>;
	}
	let fax = null;
	if (props.dealer.fax) {
		fax = <p><i className="fa fa-fax">&#160;</i> {props.dealer.fax}</p>;
	}
	let website = null;
	if (props.dealer.website) {
		website = (<p style={{fontSize: '.8em'}}><a target="_blank" href={webLink}>{props.dealer.linkText ? props.dealer.linkText : props.dealer.website}</a></p>);
	}
	let streetAddress = null;
	if (props.dealer.streetAddress) {
		streetAddress = (<p>{props.dealer.streetAddress}</p>);
	}
	let nativeName = null;
	if (props.dealer.nativeName) {
		nativeName = <h4>{props.dealer.nativeName}</h4>;
	}
	let nativeStreetAddress = null;
	if (props.dealer.nativeStreetAddress) {
		nativeStreetAddress = <p>{props.dealer.nativeStreetAddress}</p>;
	}
	let classes = "left-align grid__item grid__item_center " + props.dealerClasses;
	return (
		<div className={classes} style={{height: '400px'}}>
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
	)
}

export default dealer;