import React from "react";
import * as S from "./styles";
import { InputProps } from "./type";

const InputText: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <S.InputText
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputText;
