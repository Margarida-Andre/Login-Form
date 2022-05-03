import * as yup from "yup";

export const LoginForm = yup.object().shape({
  email: yup.string().email("Email Inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .max(8, "O número máximo de caracteres é 8")
    .min(6, "Digite pelo menos 6 caracteres")
    .required("Senha é obrigatório"),
});
