import React, { useContext, memo } from "react";
import { FormConfigContext } from "../../Contexts/FormConfigProvider";
import ClubAskArrayBtn from "../StyledComponents/ClubAskArrayBtn";
import { CSSTransition } from "react-transition-group";

import "../Animations/askarray.css";

const partnerLevels = {
	"20": "700 Club",
	"40": "700 Club Gold",
	"84": "1000 Club",
	"209": "2500 Club",
	"417": "Founder's Club",
};

const GivingArray = ({
	amounts,
	selectedIndex,
	format,
	monthlyChecked,
	addToCart,
}) => {
	const { getCssConfig } = useContext(FormConfigContext);
	const {
		arrayColor = "#fff",
		arrayBackgroundColor = "#1775BC",
		arrayBorderColor = "transparent",
		arrayBorderRadius = "5px",
		arrayHoverColor = "#1775BC",
		arrayHoverBackgroundColor = "#fff",
		arrayHoverBorderColor = "#1775BC",
		arrayDescriptorColor = "#DDB007",
	} = getCssConfig("array");
	return amounts.map((amount, i) => (
		<CSSTransition
			in={true}
			key={`array-${monthlyChecked ? "monthly" : "single"}-${i}`}
			timeout={400}
			classNames="askarray-item"
			unmountOnExit
			appear
		>
			<ClubAskArrayBtn
				className={`askbutton--club ${selectedIndex == i ? "selected" : ""}`}
				onClick={() => addToCart(amount, i)}
				arrayColor={arrayColor}
				arrayBackgroundColor={arrayBackgroundColor}
				arrayBorderColor={arrayBorderColor}
				arrayBorderRadius={arrayBorderRadius}
				arrayHoverColor={arrayHoverColor}
				arrayHoverBackgroundColor={arrayHoverBackgroundColor}
				arrayHoverBorderColor={arrayHoverBorderColor}
				arrayDescriptorColor={arrayDescriptorColor}
			>
				<div className="askbutton__amt">${amount}</div>
				<CSSTransition
					in={monthlyChecked}
					timeout={400}
					classNames="askarray-item--level"
					unmountOnExit
				>
					<div className="club-level">{partnerLevels[amount]}</div>
				</CSSTransition>
			</ClubAskArrayBtn>
		</CSSTransition>
	));
};

export default memo(GivingArray);
