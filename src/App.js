import "./custom.css";
import Input from "./Components/Input";

function OTPInput({
  numValues = 6,
  inputClass = "",
  parentClass = "",
  onChange = () => {},
  type = "number",
  separator = "",
}) {
  return (
    <>
      <Input
        numValues={numValues}
        inputClass={inputClass}
        parentClass={parentClass}
        onChange={onChange}
        type={type}
        separator={separator}
      />
    </>
  );
}

export default OTPInput;
