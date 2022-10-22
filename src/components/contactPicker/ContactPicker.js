import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleChangeContact} defaultValue="default">
      <option key="default" value="default" >
        Please select contact
      </option>
      {props.contactList.map((obj) => {
        return (
          <option value={obj.name} key={obj.name}>
            {obj.name}
          </option>
        );
      })}
    </select>
  );
};
