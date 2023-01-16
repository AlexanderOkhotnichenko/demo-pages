import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormValidation } from "../../utils/shemas/LoginFormValidetion";

import auth from "./auth.module.scss";

export function Auth() {
  const navigate = useNavigate();
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
  const goBack = () => navigate(-1);


  return (
    <>
      {/* <Link to={goBack()}>Go back</Link> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={auth.form}>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          placeholder="FirstName"
          name="firstName"
          className={
            errors?.email ? `${auth.input} ${auth.error}` : auth.input
          }
        />
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          className={
            errors?.password ? `${auth.input} ${auth.error}` : auth.input
          }
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit" className={auth.submit}>
          Sign In
        </button>
      </form>
    </>
  );
}
