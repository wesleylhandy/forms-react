import React, { Fragment, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import Media from "react-media";

import "../Animations/country-change.css";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

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
	handleBlur,
	getAddress,
	getPhone,
	allowInternational,
	type,
	hideAddressTwo,
	submitting,
	validating,
}) {
	const { allowInputPlaceholders } = useContext(FormConfigContext);
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
							handleBlur={handleBlur}
							error={errors.Address1}
							disabled={submitting}
						/>
					</FormRow>
					{!hideAddressTwo && (
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
								handleBlur={handleBlur}
								error={errors.Address2}
								disabled={submitting}
							/>
						</FormRow>
					)}
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
							handleBlur={handleBlur}
							error={errors.City}
							disabled={submitting || validating}
						/>
						<CSSTransition
							in={fields.Country == "United States"}
							timeout={{
								appear: 400,
								enter: 400,
								exit: 500,
							}}
							classNames="country-change-transition"
							component={null}
							unmountOnExit
							appear
						>
							<SelectGroup
								id="State"
								label="State"
								specialStyle="form-group--State"
								required={true}
								value={fields.State}
								error={errors.State}
								handleInputChange={handleBlur}
								required={fields.Country == "United States"}
								disabled={
									submitting || validating
								}
								options={[
									<option key="state-base-0" value="" disabled="disabled" dangerouslySetInnerHTML={{__html: allowInputPlaceholders ? "State* &#9660;" : ""}}/>,
									<Media key="media-query" query="(max-width: 613px)">
										{matches =>
											matches ? (
												getStateOptions(allowInternational, 0)
											) : (
												getStateOptions(allowInternational, 1)
											)
										}
									</Media>
								]}
							/>
						</CSSTransition>
						<CSSTransition
							in={fields.Country == "United States"}
							timeout={{
								appear: 400,
								enter: 400,
								exit: 500,
							}}
							classNames="country-change-transition"
							component={null}
							unmountOnExit
							appear
						>
							<InputGroup
								type="text"
								id="Zip"
								specialStyle="form-group--Zip"
								label="Zip"
								placeholder="Zip*"
								maxLength={fields.Country != "United States" ? 25 : 5}
								required={fields.Country == "United States"}
								disabled={
									submitting || validating
								}
								value={fields.Zip}
								handleInputChange={handleInputChange}
								handleBlur={handleBlur}
								error={errors.Zip}
								allowInternational={allowInternational}
								validation={fields.Country != "United States" ? ".*" : "[0-9]*"}
								pattern="[0-9]*"
								inputMode={fields.Country != "United States" ? "text" : "numeric"}
							/>
						</CSSTransition>
					</FormRow>

					<FormRow className="zip-country-row">
						

						{allowInternational && (
							<SelectGroup
								id="Country"
								label="Country"
								specialStyle="form-group--Country"
								required={true}
								value={fields.Country}
								error={errors.Country}
								handleInputChange={handleBlur}
								disabled={submitting || validating}
								options={[
									<option key="country-base-0" value="" disabled="disabled" dangerouslySetInnerHTML={{__html: allowInputPlaceholders ? "Country* &#9660;" : ""}}/>,
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
					label="Email"
					placeholder="Email Address*"
					maxLength="128"
					required={true}
					value={fields.Emailaddress}
					handleInputChange={handleInputChange}
					handleBlur={handleBlur}
					error={errors.Emailaddress}
					disabled={submitting}
					inputMode="email"
				/>
				{getPhone && (
					<CSSTransition
						in={fields.Country == "United States"}
						timeout={{
							appear: 400,
							enter: 400,
							exit: 500,
						}}
						classNames="country-change-transition"
						component={null}
						unmountOnExit
						appear
					>
						<InputGroup
							type="text"
							id="phone"
							specialStyle="form-group--Phone"
							label="Phone"
							placeholder="Phone"
							maxLength="24"
							required={false}
							value={fields.phone}
							disabled={ submitting }
							handleInputChange={handleInputChange}
							handleBlur={handleBlur}
							error={errors.phone}
							validation="[0-9]*"
							inputMode="tel"
							pattern="[0-9]*"
						/>
					</CSSTransition>
				)}
			</FormRow>
		</FieldSet>
	);
}

export default AddressBlock;
