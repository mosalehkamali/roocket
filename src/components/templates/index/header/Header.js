import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiArrowLeftFill } from "react-icons/pi";
import {
  LuGraduationCap,
  LuPenSquare,
  LuPhoneCall,
  LuWallet,
} from "react-icons/lu";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.textContaner}>
          <h2 className={styles.headerTitle}>
            داستان برنامه‌نویس شدنت از اینجا شروع میشه!
          </h2>
          <p className={styles.headerDisc}>
            یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته
            باشید، بقیه‌اش با راکت
          </p>
          <Link href={"/"} className={styles.startLink}>
            <p>شروع یادگیری برنامه نویسی</p>
            <PiArrowLeftFill />
          </Link>
          <ul className={styles.featuresForm}>
            <li className={styles.featuresItem}>
              <LuGraduationCap style={{ color: "#E01C4C" }} />
              <span>بیش از 80 دوره آموزشی</span>
            </li>
            <li className={styles.featuresItem}>
              <LuWallet style={{ color: "#8F9AB0" }} />
              <span>ضمانت بازگشت وجه</span>
            </li>
            <li className={styles.featuresItem}>
              <LuPenSquare style={{ color: "#9018EE" }} />
              <span>یادگیری با تمرین و آزمون</span>
            </li>
            <li className={styles.featuresItem}>
              <LuPhoneCall style={{ color: "#48A2E4" }} />
              <span>پشتیبانی ۲۴ساعته</span>
            </li>
          </ul>
        </div>

        <div className={styles.animation}>
          <Image
            width={552}
            height={359}
            priority={true}
            src={"/images/headerImg.png"}
            alt="header-image"
          ></Image>
        </div>
      </header>
    </>
  );
}

export default Header;
