import React, { memo, useState } from "react";

const TextBox = ({ qID, ques, state, handleChange }) => {
  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <label htmlFor="">
      <div className={"question-row "}>
        <div id={qID} className={"question"}>
          {qID + ". " + ques}
        </div>
      </div>
      <textarea
        className="essay"
        rows="4"
        cols="50"
        maxLength="1000"
        value={state}
        onChange={onChange}
      ></textarea>

      <div className="white-space"></div>
    </label>
  );
};

export default memo(TextBox);
