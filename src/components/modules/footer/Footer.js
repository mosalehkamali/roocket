import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { SocialMediaButton } from "../styled/Styled";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {CiMail} from "react-icons/ci"
import { PiArrowLeftFill } from "react-icons/pi";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* footer topbar section */}
          <div className={styles.topbar}>
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

            <span className={styles.topbarLine}></span>

            <div className={styles.topbarBtns}>
              <ul>
                <li>
                  <Link href={"/"}>
                    <SocialMediaButton>
                      <FaYoutube />
                    </SocialMediaButton>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <SocialMediaButton>
                      <FaFacebook />
                    </SocialMediaButton>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <SocialMediaButton>
                      <FaTwitter />
                    </SocialMediaButton>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <SocialMediaButton>
                      <FaInstagram />
                    </SocialMediaButton>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <SocialMediaButton>
                      <FaTelegramPlane />
                    </SocialMediaButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* footer main content section*/}
          <div className={styles.mainContent}>
            <div className={styles.aboutSection}>
              <div className={styles.sectionTitle}>درباره راکت</div>
              <div className={styles.aboutContent}>
                <p className={styles.aboutText}>
                  راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                  ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
                  مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار
                  دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان
                  جهان هدف ماست.
                </p>
                <Link href={"/"} className={styles.allCoursesBtn}>
                  <span>مشاهده همه مسیرهای یادگیری</span>
                  <PiArrowLeftFill />
                </Link>
              </div>
            </div>
            <div className={styles.siteSection}>
              <div className={styles.sectionTitle}>بخش های سایت</div>
              <div className={styles.siteContent}>
                <ul className={styles.siteList}>
                  <li className={styles.siteLink}>
                    <Link href={"/"}>
                      <span>قوانین و مقررات</span>
                    </Link>
                  </li>
                  <li className={styles.siteLink}>
                    <Link href={"/"}>
                      <span>مدرسان راکت</span>
                    </Link>
                  </li>
                  <li className={styles.siteLink}>
                    <Link href={"/"}>
                      <span>درباره راکت</span>
                    </Link>
                  </li>
                  <li className={styles.siteLink}>
                    <Link href={"/"}>
                      <span>ارتباط با ما</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contactSection}>
              <div className={styles.sectionTitle}>ارتباط با ما</div>
              <div className={styles.contactContent}>
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <div className={styles.liName}>
                    <CiMail />
                      <span>ایمیل:</span>
                    </div>
                    <div className={styles.siteLink}>
                      <Link href={"/"}>mosalehkamali@gmail.com</Link>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.liName}>
                    <FaTelegramPlane/>
                      <span>آی دی تلگرام:</span>
                    </div>
                    <div className={styles.siteLink}>
                      <Link target="_blank" href={"https://t.me/mosaleh777"}>@mosaleh777</Link>
                    </div>
                  </li>
                </ul>
                <div className={styles.icense}>
                  <Image height={110} width={100} src={"https://roocket.ir/img/pic/samandehi.png?width=90&height=110"}/>
                  <Image height={110} width={100} src={"https://roocket.ir/img/pic/enamad.png?width=100&height=110"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
