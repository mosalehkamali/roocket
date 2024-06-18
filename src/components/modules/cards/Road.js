import React from "react";
import styles from "./Road.module.css";
import { IoLogoJavascript } from "react-icons/io";
import Link from "next/link";
import { PiArrowLeftFill } from "react-icons/pi";

function Road() {
  return (
    <div className={styles.roadCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIcon}>
            <IoLogoJavascript />
          </div>
          <div className={styles.cardCourses}>
            <p> شامل 8 دوره</p>
          </div>
        </div>

        <Link href={"/"} className={styles.cardTitle}>
          آموزش جاوااسکریپت
        </Link>

        <div className={styles.cardDisc}>
          <p>
            آموزش جاوااسکریپت (js) از صفر تا صد با بیان مباحث مقدماتی تا پیشرفته
            به همراه مدرسین مجرب در مجموعه آموزشی راکت
          </p>
        </div>
      </div>

      <Link href={"/"} className={styles.cardBtn}>
        <span>مشاهده اطلاعات مسیریادگیری</span>
        <PiArrowLeftFill />
      </Link>
    </div>
  );
}

export default Road;
