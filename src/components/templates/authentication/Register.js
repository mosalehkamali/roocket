"use client";

import React from "react";
import styles from "./authentication.module.css";
import { RiKeyLine } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { PageButton, SaveButton } from "@/components/modules/styled/Styled";

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <p>ROOCKET</p>
          <Image
            width={200}
            height={200}
            src="/images/logo.jpg"
            alt="png"
          ></Image>
        </Link>
      </div>

      <div className={styles.formContent}>
        <div className={styles.pageButtons}>
          <Link href={"/register"}>
            <PageButton activity="active">
              <TiUserAdd />
              <span>ثبت نام</span>
            </PageButton>
          </Link>
          <Link href={"/login"}>
            <PageButton>
              <RiKeyLine />
              <span>ورود</span>
            </PageButton>
          </Link>
        </div>
        <div className={styles.textContent}>
          <h2>ثبت‌نام در راکت</h2>
          <p>به راکت خوش اومدی! برای عضویت یکی از راهای زیر رو انتخاب کن</p>
        </div>
        <PageButton>
          <FcGoogle />
          <span>ثبت‌نام با گوگل</span>
        </PageButton>
        <div className={styles.middleLine}>
          <span className={styles.middleText}>یا ثبت‌ نام با</span>
        </div>
        <form
          className={styles.authForm}
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <label>
            <span>ایمیل:</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "وارد کردن ایمیل اجباری است",
              pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                message: "ایمیل وارد شده معتبر نیست",
              },
            })}
          />

          <div className={styles.inputError}>
            {errors.email && errors.email.message}
          </div>
          <label>
            <span>پسورد:</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "وارد کردن پسورد اجباری است",
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
                message:
                  "پسورد باید بیشتر از 8 کاراکتر و شامل حروف کوچک ، بزرگ ، عدد و کاراکتر خاص باشد",
              },
            })}
          />
          <div className={styles.inputError}>
            {errors.password && errors.password.message}
          </div>
          <label>
            <span>تایید پسورد:</span>
          </label>
          <input
            type="password"
            {...register("validatePassword", {
              required: "پسورد خود را تکرار کنید",
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
                message:
                  "پسورد باید بیشتر از 8 کاراکتر و شامل حروف کوچک ، بزرگ ، عدد و کاراکتر خاص باشد",
              },
              validate: (value) => {
                const password = getValues(["password"]);
                return value === password[0]
                  ? true
                  : "تایید پسورد با پسورد مطابقت ندارد";
              },
            })}
          />
          <div className={styles.inputError}>
            {errors.validatePassword && errors.validatePassword.message}
          </div>
          <SaveButton style={{ fontSize: "1rem", margin: "1rem 0 0 0" }}>
            ورود
          </SaveButton>
        </form>
      </div>
    </div>
  );
}

export default Register;