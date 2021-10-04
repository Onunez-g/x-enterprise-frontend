import React from "react";

interface InputProps {
  value: any,
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  type?: "text" | "tel" | "number" | "email"
}

const FormInput = ({value, onChange, name, ...props}: InputProps): JSX.Element => {
  return (
    <>
      <label>
        {props.label || name}:
        <input
          value={value}
          name={name}
          onChange={onChange}
          type={props.type || "text"}
        />
      </label>
    </>
  );
};

export default FormInput;
