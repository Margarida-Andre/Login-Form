import styled from "styled-components";

export const Container = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.8rem;
  font-family: "Poppins";
  background: linear-gradient(63.01deg, #000000 29.81%, #2d2c2c 100%);
`;

export const ContainerWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 6rem;
  color: #049496;
`;

export const Welcome = styled.p`
  width: 400px;
  height: 76px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  text-align: center;
  color: #ffffff;
  margin-top: 0.6rem;
`;

export const Box = styled.div`
  width: 27.5rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  width: 27.5rem;
  color: white;
  font-size: 1rem;
  font-family: "Poppins";
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2.938rem;
  border-radius: 0.313rem;
  background: linear-gradient(90deg, #353639 0%, rgba(31, 32, 36, 0.55) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const IconEyes = styled.div`
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  left: 25rem;
  bottom: 2rem;

  :hover {
    color: #049496;
  }
`;

export const RecuperarSenha = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const Link = styled.a`
  font-size: 1rem;
  color: #ffffff;
  transition: 2s;

  :hover {
    color: #049496;
    transition: 2s;
  }
`;

export const Icon = styled.img`
  width: 12px;
  height: 17px;
  margin-left: 0.4rem;
`;

export const Errors = styled.div`
  width: 100%;
  height: auto;
  background-color: transparent;
  color: #fff;
  border: 1px solid red;
  opacity: 0.8;
  padding: 8px;
  display: flex;
  justify-content: center;
  margin-top: 6px;
  font-weight: 400;
  border-radius: 5px;
`;

export const ContainerButton = styled.div`
  margin-top: 1.5rem;
`;

export const QuestionAboutAccount = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const Line = styled.div`
  width: 94.67px;
  opacity: 0.5;
  border-bottom: 1px solid #ffffff;
`;

export const Text = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 27px;
  color: #ffffff;
  transition: 2s;

  :hover {
    color: #049496;
    transition: 2s;
  }
`;

export const CreateAccount = styled.a`
  width: 440px;
  height: 47px;

  color: #049496;
  background: transparent;
  border: 1px solid #049496;
  font-size: 1.25rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-decoration: none;

  :hover {
    background: #049496;
    color: #ffffff;
    transition: 0.2s;
  }
`;
