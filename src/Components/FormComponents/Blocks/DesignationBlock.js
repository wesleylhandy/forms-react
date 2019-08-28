import React, { useState, useContext, useRef } from "react";
import { GivingFormContext } from "../../Contexts/GivingFormProvider";

import FormHeader from "../StyledComponents/FormHeader";
import {
	Designation,
	DesignationContainer,
	DesignationListContainer,
	DesignationList,
	DesignationCheck,
} from "../StyledComponents/Designation";
import DropArrow from "../SVG/DropArrow";

import { MdClose, MdCheck } from "react-icons/md";

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
			<FormHeader role="label" id="listbox-label">
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
			<DesignationListContainer
				className="designation--list-container"
				hidden={!isOpen}
			>
				<div className="designation-list--close">
					<MdClose onClick={() => toggleOpen(!isOpen)} />
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
								<MdCheck />
							</DesignationCheck>
						</Designation>
					))}
				</DesignationList>
			</DesignationListContainer>
		</DesignationContainer>
	);
};

export default DesignationBlock;
