import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SuccessForm = (props) => {
  return (props.successForm.length > 0
    ?
    props.successForm.map((success, index) => {
      return (
        <label className="text-danger" key={index}>
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="1x"></FontAwesomeIcon>
          <span>{success.message.toString()}</span>
        </label>);
    })
    :
    null);
};
export default SuccessForm;