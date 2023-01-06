import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().email("wrong mail!").required("mail is compulsory!"),
  password: yup.string().min(8, "the password is at least 8 characters long!").required("password is mandatory!"),
});