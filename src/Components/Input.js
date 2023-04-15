import React, { useEffect, useRef, useState } from "react";

const Input = ({
  numValues = 4,
  inputClass = "",
  parentClass = "",
  onChange = () => {},
  type = "number",
  separator = "",
}) => {
  const [fields, setFields] = useState(new Array(numValues).fill(""));
  const refs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1) {
      // Update the state with the new value
      setFields((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        onChange(newOtp);
        return newOtp;
      });

      // Move focus to the next input element, if available
      if (value && index < refs.current.length - 1) {
        refs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to the previous input element, if Backspace key is pressed and the input is empty
    if (e.key === "Backspace" && index > 0) {
      setFields((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });
      refs.current[index - 1].focus();
    }
  };

  return (
    <div className={`div-class ${parentClass}`}>
      {fields?.map((item, index) => (
        <input
          key={index}
          type={type}
          ref={(ref) => (refs.current[index] = ref)}
          name={`otp${index}`}
          id={`input-class-${index}`}
          className={`input-class ${inputClass}`}
          maxLength={1}
          value={fields[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default Input;
