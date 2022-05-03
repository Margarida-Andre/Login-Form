import * as S from "./styles";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({ type, description, onClick }) => {
  return (
    <S.Btn type={type} onClick={onClick}>
      {description}
    </S.Btn>
  );
};

export default Button;
