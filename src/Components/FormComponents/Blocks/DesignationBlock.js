import React, { useState, useContext, useRef, useLayoutEffect } from "react";
import { GivingFormContext } from "../../Contexts/GivingFormProvider";
import { CSSTransition } from "react-transition-group";
import { LiveMessage } from "react-aria-live";

import "../Animations/designations.css";

import FormHeader from "../StyledComponents/FormHeader";
import {
	Designation,
	DesignationContainer,
	DesignationListContainer,
	DesignationList,
	DesignationCheck,
	DesignationOverlay
} from "../StyledComponents/Designation";
import DropArrow from "../SVG/DropArrow";
import CheckMark from "../SVG/CheckMark";
import CloseBtn from "../SVG/CloseBtn";

import {scrollToPoint, offsetTop} from '../../../helpers/scrollToPoint'

const DesignationBlock = ({ designations }) => {
	const [hasOpened, setHasOpened] = useState(false);
	const [isOpen, toggleOpen] = useState(false);
	const [hovering, setHoverIndex] = useState(-1);
	const { designatedIndex, updateDesignation } = useContext(GivingFormContext);
	const [ a11yMessage, setA11yMessage ] = useState("The Standard Designation for Single Gifts is " + designations[designatedIndex].title);
	const listRef = useRef();
	const displayRef = useRef();
	const selectedRef = useRef();
	const handleListFocus = () => {
		setHasOpened(true)
		toggleOpen(!isOpen)
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
	const handleKeyUp = (e) => {
		const { keyCode } = e;
		let nextIndex;
		switch (keyCode) {
			case 13: // ENTER
				e.preventDefault();
				setHasOpened(true)
				toggleOpen(!isOpen);
				break;
			case 27: // ESC
				e.preventDefault();
				toggleOpen(false);
				displayRef.current.focus();
			  break;
			case 35: // END
				if (isOpen) {
					e.preventDefault();
					toggleOpen(true)
					nextIndex = designations.length - 1;
					updateDesignation({
						type: "UPDATE_DESIGNATION",
						designatedIndex: nextIndex,
						designationInfo: designations[nextIndex],
					});
						}
			  break;
			case 36: // HOME
				if (isOpen) {
					e.preventDefault();
					toggleOpen(true);
					nextIndex = 0;
					updateDesignation({
						type: "UPDATE_DESIGNATION",
						designatedIndex: nextIndex,
						designationInfo: designations[nextIndex],
					});
							}
			  break;
			case 38: // UP
			  e.preventDefault();
			  toggleOpen(true);
				nextIndex = designatedIndex > 0 ? designatedIndex - 1 : 0;
				updateDesignation({
					type: "UPDATE_DESIGNATION",
					designatedIndex: nextIndex,
					designationInfo: designations[nextIndex],
				});
			  break;
			case 40: // DOWN
			  e.preventDefault();
			  toggleOpen(true);
			  nextIndex = designatedIndex < designations.length - 1 ? designatedIndex + 1 : designations.length - 1;
			  updateDesignation({
				type: "UPDATE_DESIGNATION",
				designatedIndex: nextIndex,
				designationInfo: designations[nextIndex],
				});
			  break;
		  }
	}
	const handleFocus = e => {
		const {target} = e
		const top = offsetTop(target, listRef.current);
		scrollToPoint(top, listRef.current, target, 12)
	}
	useLayoutEffect(() => {
		if (isOpen) {
			console.log("Layout Effect Called")
			selectedRef.current.focus();
			setA11yMessage("Designation Selected: " + designations[designatedIndex].title)
		} else if (hasOpened) {
			console.log("Layout Effect Called")
			displayRef.current.focus();
		} else {
			console.log("Layout Effect Called")
			setA11yMessage("Designation Selected: " + designations[designatedIndex].title)
		}
	})
	return (
		<>
		<LiveMessage message={a11yMessage} aria-live="polite" aria-label={designations[designatedIndex].title} />
		<CSSTransition
				in={isOpen}
				timeout={{
					appear: 400,
					enter: 400,
					exit: 500,
				}}
				classNames="designation--overlay-transition"
		>
			<DesignationOverlay className="designation-list--overlay" hidden={!isOpen} onClick={handleListFocus}/>
		</CSSTransition>
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
				tabIndex="0"
				role="button"
				onKeyUp={handleKeyUp}
				ref={displayRef}
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
						<CloseBtn currentColor="#333"/>
					</div>
					<DesignationList
						ref={listRef}
						role="listbox"
						id="listbox"
						aria-labelledby="listbox-label"
						aria-activedescendant={`designation-${designatedIndex}`}
						tabIndex={isOpen ? "0" : "-1"}
						onKeyUp={handleKeyUp}
					>
						{designations.map(({ img, title, description }, idx) => (
							<Designation
								id={`designation-${idx}`}
								key={`designation-${idx}`}
								className={`designation ${idx === designatedIndex ? "selected" : ""}`}
								onMouseEnter={() => handleHover(idx)}
								onMouseLeave={() => handleHover(-1)}
								onClick={() => handleClick(idx)}
								aria-selected={idx === designatedIndex}
								ref={idx === designatedIndex ? selectedRef : null}
								role="option"
								tabIndex="0"
								onFocus={handleFocus}
								onKeyUp={e=>e.preventDefault()}
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
		</>
	);
};

export default DesignationBlock;
