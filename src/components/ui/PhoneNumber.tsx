import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { type DefaultInputComponentProps } from "react-phone-number-input";

export const PhoneNumber = ({className, onChange, ...rest}:DefaultInputComponentProps) => {
  return (
    <>
      <PhoneInput
        {...rest}
        onChange={onChange}
        placeholder="Enter phone number"
     
        className="phone-input-wrapper"
      />
      {/* National: {value && formatPhoneNumber(value)}
      International: {value && formatPhoneNumberIntl(value)}
      Country code: {value && formatPhoneNumber(value, "International").split(" ")[0]} */}
    </>
  );
};
