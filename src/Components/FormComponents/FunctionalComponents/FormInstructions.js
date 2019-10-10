import React from 'react';
import styled from "@emotion/styled";

const Instructions = styled.div`
    margin-top: -20px;
`

const FormInstructions = ({formInstructions}) => <Instructions dangerouslySetInnerHTML={{__html: formInstructions}}/>

export default FormInstructions;