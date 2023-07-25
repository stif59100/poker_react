import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ErrorsForm = (props) => {
  return (props.errorsForm.length > 0
    ?
    props.errorsForm.map((error, index) => {
      console.log("JS SUI DANS LE MAP ERROR FORM", error);
      return (
        <label className="text-danger" key={index}>
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="1x"></FontAwesomeIcon>
          <span>{error.message.toString()}</span>
        </label>);
    })
    :
    null);
};
export default ErrorsForm;