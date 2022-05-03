import React, { useState } from "react";
import Button from "./components/Button";
import InputText from "./components/Input";
import { useFormik } from "formik";
import { LoginForm } from "./validations";
import { IoMdEye } from "react-icons/io";
import GlobalStyles from "./global";
import * as S from "./styles";

export default function Login() {
  const [showPassword, setSowPassword] = useState(false);

  const togglePasswordVisible = () => {
    setSowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <S.Container>
          <S.ContainerWelcome>
            <S.Logo>MD</S.Logo>
            <S.Welcome>Seja bem-vindo(a) em nossa plataforma</S.Welcome>
          </S.ContainerWelcome>

          <S.Box>
            <S.ContainerInput>
              Email
              <InputText
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <S.Errors>{formik.errors.email}</S.Errors>
              ) : null}
            </S.ContainerInput>

            <S.ContainerInput>
              Senha
              <InputText
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <S.IconEyes onClick={togglePasswordVisible}>
                <IoMdEye onClick={togglePasswordVisible} />
              </S.IconEyes>
            </S.ContainerInput>

            <S.RecuperarSenha>
              <S.Link>Recuperar Senha</S.Link>
              <S.Icon src="/assets/Icon-cad.svg" alt="cad" />
            </S.RecuperarSenha>

            {formik.touched.password && formik.errors.password ? (
              <S.Errors>{formik.errors.password}</S.Errors>
            ) : null}
          </S.Box>

          <S.ContainerButton>
            <Button type="submit" description="Entrar" />
          </S.ContainerButton>

          <S.QuestionAboutAccount>
            <S.Line />
            <S.Text>Ainda não tem conta?</S.Text>
            <S.Line />
          </S.QuestionAboutAccount>

          <S.CreateAccount href="/NewAccount">
            Crie uma conta e conheça os benefícios
          </S.CreateAccount>
        </S.Container>
      </form>
      <GlobalStyles />
    </>
  );
}
