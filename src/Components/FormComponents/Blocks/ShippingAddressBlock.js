import React from "react";

import SelectGroup from "../SelectGroup";
import InputGroup from "../InputGroup";
import FormPanel from "../StyledComponents/FormPanel";
import FormRow from "../StyledComponents/FormRow";
import ShippingTitle from "../StyledComponents/ShippingTitle";

import getStateOptions from "../../../helpers/renderStateOptions";

function ShippingAddressBlock({
	fields,
	errors,
	handleInputChange,
	international,
}) {
	return (
		<FormPanel className="shipping-address__info">
			<FormRow className="shipping-address__info--title">
				<ShippingTitle>
					<hr />
					<h3>Shipping Address</h3>
					<hr />
				</ShippingTitle>
			</FormRow>
			<FormRow>
				<InputGroup
					type="text"
					id="ShipToName"
					specialStyle=""
					label="Name"
					placeholder="First and Last Name"
					maxLength="100"
					required={fields.ShipToYes}
					value={fields.ShipToName}
					handleInputChange={handleInputChange}
					error={errors.ShipToName}
				/>
			</FormRow>
			<FormRow>
				<InputGroup
					type="text"
					id="ShipToAddress1"
					specialStyle=""
					label="Address"
					placeholder="Shipping Address*"
					maxLength="64"
					required={fields.ShipToYes}
					value={fields.ShipToAddress1}
					handleInputChange={handleInputChange}
					error={errors.ShipToAddress1}
				/>
			</FormRow>
			<FormRow>
				<InputGroup
					type="text"
					id="ShipToAddress2"
					specialStyle=""
					label="Address2"
					placeholder="Shipping Address Line 2"
					maxLength="64"
					required={false}
					value={fields.ShipToAddress2}
					handleInputChange={handleInputChange}
					error={errors.ShipToAddress2}
				/>
			</FormRow>
			<FormRow className="city-state-row">
				<InputGroup
					type="text"
					id="ShipToCity"
					specialStyle="form-group--City"
					label="City"
					placeholder="City"
					maxLength="64"
					required={fields.ShipToYes}
					value={fields.ShipToCity}
					handleInputChange={handleInputChange}
					error={errors.ShipToCity}
				/>
				<SelectGroup
					id="ShipToState"
					specialStyle="form-group--State"
					required={fields.ShipToYes}
					value={fields.ShipToState}
					error={errors.ShipToState}
					handleInputChange={handleInputChange}
					options={[
						<option key="shiptostate-base-0" value="">
							State* &#9663;
						</option>,
						getStateOptions(international),
					]}
				/>
			</FormRow>
			<FormRow>
				<InputGroup
					type="text"
					id="ShipToZip"
					specialStyle=""
					label="Zip"
					placeholder="Zip*"
					maxLength="5"
					required={fields.ShipToYes}
					value={fields.ShipToZip}
					handleInputChange={handleInputChange}
					error={errors.ShipToZip}
					international={international}
				/>
			</FormRow>
		</FormPanel>
	);
}

export default ShippingAddressBlock;
