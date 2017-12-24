import React from 'react';

function isVowel(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = props => {
  return (
      <div className="form-group row">
        <label htmlFor={props.id} className="col-sm-2 col-form-label no-wrap">{props.label}</label>
        <div className="col-sm-10">
          <input
              type={props.type}
              onChange={props.inputAction}
              id={props.id}
              className="form-control"
              style={props.style}
              placeholder={`Please enter ${isVowel(props.label[0]) ? "an" : "a"} ${props.label}`}
            />
        </div>
      </div>
  )
};

export default InputField;