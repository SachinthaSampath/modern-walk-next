import React from "react";
import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  value,
  className,
  type,
  name,
  id,
}: InputFieldProps): React.JSX.Element => {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        name={name}
        id={id}
      />
    </>
  );
};
export default InputField;
