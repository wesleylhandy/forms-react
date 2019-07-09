import React, { Fragment } from "react";

import FormRow from "../StyledComponents/FormRow";
import FieldSet from "../StyledComponents/FieldSet";
import InputGroup from "../InputGroup";
import SelectGroup from "../SelectGroup";

import getStateOptions from "../../../helpers/renderStateOptions";
import { countries } from "../../../config/dropdowns.json";

function AddressBlock({
	fields,
	errors,
	handleInputChange,
	getAddress,
	getPhone,
	allowInternational,
	type,
}) {
	return (
		<FieldSet className="address-block">
			<legend>{`${type} Address Block`}</legend>
			{getAddress && (
				<Fragment>
					<FormRow className="address1-row">
						<InputGroup
							type="text"
							id="Address1"
							specialStyle="form-group--Address1"
							label="Address"
							placeholder="Address*"
							maxLength="31"
							required={true}
							value={fields.Address1}
							handleInputChange={handleInputChange}
							error={errors.Address1}
						/>
					</FormRow>
					<FormRow className="address2-row">
						<InputGroup
							type="text"
							id="Address2"
							specialStyle="form-group--Address2"
							label="Address2"
							placeholder="Address Line 2"
							maxLength="31"
							required={false}
							value={fields.Address2}
							handleInputChange={handleInputChange}
							error={errors.Address2}
						/>
					</FormRow>
					<FormRow className="city-state-row">
						<InputGroup
							type="text"
							id="City"
							specialStyle="form-group--City"
							label="City"
							placeholder="City*"
							maxLength="28"
							required={true}
							value={fields.City}
							handleInputChange={handleInputChange}
							error={errors.City}
						/>
						<SelectGroup
							id="State"
							specialStyle="form-group--State"
							required={true}
							value={fields.State}
							error={errors.State}
							handleInputChange={handleInputChange}
							options={[
								<option key="state-base-0" value="" disabled="disabled">
									State* &#9663;
								</option>,
								getStateOptions(allowInternational),
							]}
						/>
					</FormRow>

					<FormRow className="zip-country-row">
						<InputGroup
							type="text"
							id="Zip"
							specialStyle="form-group--Zip"
							label="Zip"
							placeholder="Zip*"
							maxLength={fields.Country != "United States" ? 25 : 5}
							required={true}
							value={fields.Zip}
							handleInputChange={handleInputChange}
							error={errors.Zip}
							allowInternational={allowInternational}
							validation={fields.Country != "United States" ? "*" : "d*"}
						/>

						{allowInternational && (
							<SelectGroup
								id="Country"
								specialStyle="form-group--Country"
								required={true}
								value={fields.Country}
								error={errors.Country}
								handleInputChange={handleInputChange}
								options={[
									<option key="country-base-0" value="" disabled="disabled">
										Country* &#9663;
									</option>,
									countries.map((country, i) => (
										<option key={`country-${i}`} value={country}>
											{country}
										</option>
									)),
								]}
							/>
						)}
					</FormRow>
				</Fragment>
			)}
			<FormRow className="email-phone-row">
				<InputGroup
					type="text"
					id="Emailaddress"
					specialStyle="form-group--Email"
					label="Email Address"
					placeholder="Email Address*"
					maxLength="128"
					required={true}
					value={fields.Emailaddress}
					handleInputChange={handleInputChange}
					error={errors.Emailaddress}
				/>
				{getPhone && (
					<InputGroup
						type="text"
						id="phone"
						specialStyle="form-group--Phone"
						label="Phone Number"
						placeholder="Phone"
						maxLength="24"
						required={false}
						value={fields.phone}
						handleInputChange={handleInputChange}
						error={errors.phone}
						validation="\d*"
					/>
				)}
			</FormRow>
		</FieldSet>
	);
}

export default AddressBlock;
