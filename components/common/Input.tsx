import { ChangeEvent } from "react";

type Props = {
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  required = false,
}: Props) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      onChange={onChange}
      value={value}
      className="input-container"
    />
  );
}
