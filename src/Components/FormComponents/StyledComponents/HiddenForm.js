import React from 'react'
import styled from "@emotion/styled"

const HiddenForm = styled.form`
    height: 0;
    width: 0;
    visibility: hidden;
    opacity: 0;
    input[type="submit"] {
        height: 0;
        width: 0;
        visibility: hidden;
        opacity: 0;
    }
`

export default HiddenForm