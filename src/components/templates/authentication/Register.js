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
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { authUser } from "@/utils/helpers";

function Register() {
  const router = useRouter();

  const user = authUser();
  if (user) {
    router.replace("/");
  }

  const [isRecaptchaValide, setIsRecaptchaValide] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (data) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    switch (res.status) {
      case 201:
        return Swal.fire({
          title: "ثبت نام شما با موفقیت انجام شد",
          text: "می خواهید به کدام صفحه بروید؟",
          icon: "success",
          confirmButtonText: "پنل کاربری",
          confirmButtonColor: "#4283ed",
          showCancelButton: true,
          cancelButtonText: "صفحه اصلی",
          cancelButtonColor: "#269745",
          background: "#d2ddec",
        }).then((resault) => {
          if (resault.isConfirmed) {
            router.replace("/p-user");
          } else if (resault.isDismissed) {
            router.replace("/");
          }
        });
      case 422:
        return Swal.fire({
          title: "خطا در ثبت نام",
          text: "لطفا اطلاعات خود را چک کنید",
          icon: "error",
          confirmButtonText: "تلاش مجدد",
        });
      case 409:
        return Swal.fire({
          title: "کاربری با این ایمیل قبلا ثبت نام کرده است",
          icon: "warning",
          confirmButtonText: "تلاش مجدد",
        });
      case 500:
        return Swal.fire({
          title: "خطای سرور !!!",
          icon: "error",
          confirmButtonText: "تلاش مجدد",
        });
    }
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
            <span>نام کاربری:</span>
          </label>
          <input
            type="text"
            {...register("username", {
              required: "وارد کردن نام کاربری اجباری است",
              minLength: {
                value: 4,
                message: "نام کاربری باید حداقل 4 کاراکتر داشته باشد",
              },
              maxLength: {
                value: 15,
                message: "نام کاربری حداکثر میتواند 15 کاراکتر داشته باشد",
              },
            })}
          />

          <div className={styles.inputError}>
            {errors.username && errors.username.message}
          </div>
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
            {...register("confirmPassword", {
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
            {errors.confirmPassword && errors.confirmPassword.message}
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
            ثبت‌نام
          </SaveButton>
        </form>
      </div>
    </div>
  );
}

export default Register;
