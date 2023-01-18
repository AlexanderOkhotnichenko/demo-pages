import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginFormValidation } from "../../utils/shemas/LoginFormValidetion";

import contact from "../../styles/contact.module.scss";

export function Auth() {
  // const schema = yup.object().shape({
  //   firstName: yup
  //     .string()
  //     .matches(firstNameReg, "The name must not contain any numbers")
  //     .required("First name is a required field"),
  //   password: yup
  //     .string()
  //     .matches(passwordReg, "The password must contain letters and numbers")
  //     .required("Password is a required field")
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: yupResolver(LoginFormValidation)
  });
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={contact.form}>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          placeholder="FirstName"
          name="firstName"
          className={
            errors?.email ? `${contact.input} ${contact.error}` : contact.input
          }
        />
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          className={
            errors?.password ? `${contact.input} ${contact.error}` : contact.input
          }
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit" className={contact.submit}>
          Sign In
        </button>
      </form>
    </>
  );
}
