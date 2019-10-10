import React from 'react';

import FormRow from "../StyledComponents/FormRow";
import FieldSet from "../StyledComponents/FieldSet";
import TextAreaGroup from "../FunctionalComponents/TextAreaGroup";

const MessageBlock = props => {
    return (
        <FieldSet>
            <legend>{`Message Block`}</legend>
            <FormRow className="messsage-row">
                <TextAreaGroup {...props} />
            </FormRow>
        </FieldSet>
    )
}

export default MessageBlock;
