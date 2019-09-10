import React, { useState, useContext, useRef } from "react";
import { GivingFormContext } from "../../Contexts/GivingFormProvider";
import { CSSTransition } from "react-transition-group";

import "../Animations/designations.css";

import FormHeader from "../StyledComponents/FormHeader";
import {
	Designation,
	DesignationContainer,
	DesignationListContainer,
	DesignationList,
	DesignationCheck,
} from "../StyledComponents/Designation";
import DropArrow from "../SVG/DropArrow";
import CheckMark from "../SVG/CheckMark";
import CloseBtn from "../SVG/CloseBtn";

const DesignationBlock = ({ designations }) => {
	const [isOpen, toggleOpen] = useState(false);
	const [hovering, setHoverIndex] = useState(-1);
	const { designatedIndex, updateDesignation } = useContext(GivingFormContext);
	const listRef = useRef();

	const handleListFocus = () => {
		if (!isOpen) {
			listRef.current.focus();
		}
		toggleOpen(!isOpen);
	};

	const handleClick = idx => {
		updateDesignation({
			type: "UPDATE_DESIGNATION",
			designatedIndex: idx,
			designationInfo: designations[idx],
		});
		toggleOpen(false);
	};

	const handleHover = idx => {
		setHoverIndex(idx);
	};
	return (
		<DesignationContainer className="designation-container">
			<FormHeader role="label" id="listbox-label" style={{fontSize: 17, marginBottom: 5}}>
				Designate Gift (optional)
			</FormHeader>
			<Designation
				className="designation display"
				onClick={handleListFocus}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-labelledby="listbox-label"
			>
				<div className="designation__image">
					<img
						className="img-responsive"
						src={designations[designatedIndex].img}
						alt={`The ministry of ${designations[designatedIndex].title}`}
					/>
				</div>
				<div className="designation__body">
					<h4
						className="designation__title"
						dangerouslySetInnerHTML={{
							__html: designations[designatedIndex].title,
						}}
					></h4>
					<div
						className="designation__description"
						dangerouslySetInnerHTML={{
							__html: designations[designatedIndex].description,
						}}
					></div>
				</div>
				<div className="designation--arrow">
					<DropArrow open={isOpen} />
				</div>
			</Designation>
			<CSSTransition
				in={isOpen}
				timeout={{
					appear: 400,
					enter: 400,
					exit: 500,
				}}
				classNames="designation--list-transition"
			>
				<DesignationListContainer
					className="designation--list-container"
					hidden={!isOpen}
				>
					<div
						className="designation-list--close"
						onClick={() => toggleOpen(!isOpen)}
					>
						<CloseBtn currentColor="#333" />
					</div>
					<DesignationList
						ref={listRef}
						role="listbox"
						id="listbox"
						aria-labelledby="listbox-label"
						aria-activedescendant={`designation-${designatedIndex}`}
						tabIndex="-1"
					>
						{designations.map(({ img, title, description }, idx) => (
							<Designation
								id={`designation-${idx}`}
								key={`designation-${idx}`}
								className="designation"
								onMouseEnter={() => handleHover(idx)}
								onMouseLeave={() => handleHover(-1)}
								onClick={() => handleClick(idx)}
								aria-selected={idx === designatedIndex}
								role="option"
							>
								<div className="designation__image">
									<img className="img-responsive" src={img} />
								</div>
								<div className="designation__body">
									<h4
										className="designation__title"
										dangerouslySetInnerHTML={{ __html: title }}
									></h4>
									<div
										className="designation__description"
										dangerouslySetInnerHTML={{ __html: description }}
									></div>
								</div>
								<DesignationCheck
									className="designation--check"
									selected={idx === designatedIndex}
									hover={idx === hovering}
								>
									<CheckMark
										fillColor={idx === designatedIndex ? "#009BDF" : "#979797"}
									/>
								</DesignationCheck>
							</Designation>
						))}
					</DesignationList>
				</DesignationListContainer>
			</CSSTransition>
		</DesignationContainer>
	);
};

export default DesignationBlock;
