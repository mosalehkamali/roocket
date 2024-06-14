"use client";

import React, { useState } from "react";
import styles from "./authentication.module.css";
import { RiKeyLine } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { PageButton, SaveButton } from "@/components/modules/styled/Styled";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [isRecaptchaValide, setIsRecaptchaValide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  const verifyRecaptcha = () => {
    setIsRecaptchaValide(true);
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
            <PageButton>
              <TiUserAdd />
              <span>ثبت نام</span>
            </PageButton>
          </Link>
          <Link href={"/login"}>
            <PageButton activity="active">
              <RiKeyLine />
              <span>ورود</span>
            </PageButton>
          </Link>
        </div>
        <div className={styles.textContent}>
          <h2>سلام رفیق!</h2>
          <p>به خونه خوش اومدی! اگه عضو راکت هستی، وارد شو</p>
        </div>
        <PageButton>
          <FcGoogle />
          <span>ورود با گوگل</span>
        </PageButton>
        <div className={styles.middleLine}>
          <span className={styles.middleText}>یا ورود به حساب با</span>
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
          <div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={verifyRecaptcha}
            />
          </div>
          <SaveButton
            disabled={!isRecaptchaValide}
            style={{ fontSize: "1rem", margin: "1rem 0 0 0" }}
          >
            ورود
          </SaveButton>
        </form>
        <div className={styles.forgetPass}>
          <Link href={"/"}>پسورد خود را فراموش کرده اید؟</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
