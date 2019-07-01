import React from "react";

import SubmitButtonGroup from "./StyledComponents/SubmitButtonGroup"
import FormError from "./StyledComponents/FormError";

const SubmitButton = ({ hasErrors, error, handleSubmit, submitting }) => {
  return (
    <SubmitButtonGroup className="submit-row">
      <input
        type="submit"
        id="submit"
        onClick={handleSubmit}
        disabled={submitting}
        value={submitting ? "Please Wait..." : "Save Changes"}
      />
      <FormError>
        {hasErrors && error
          ? error
          : hasErrors
          ? "Please scroll up to correct errors."
          : ""}
      </FormError>
    </SubmitButtonGroup>
  );
};

export default SubmitButton;
