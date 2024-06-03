"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  LuSearch,
  LuGraduationCap,
  LuWallet,
  LuFileQuestion,
} from "react-icons/lu";
import { PiHandbagFill } from "react-icons/pi";
import { HiBell } from "react-icons/hi";
import { TiUserAdd } from "react-icons/ti";
import { IoLogIn, IoVideocamOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRoute, FaRegUserCircle } from "react-icons/fa";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

function Navbar() {
  const [acountDropDown, setAcountDropDown] = useState(false);
  const [coursesDropDown, setCoursesDropDown] = useState(false);
  const [linksDropDown, setLinksDropDown] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setAcountDropDown(false);
      setCoursesDropDown(false);
      setLinksDropDown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.topNav}>
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

          <div className={styles.searchBar}>
            <button>
              <LuSearch />
            </button>
            <input type="text" placeholder="دنبال چی میگردی ؟" />
          </div>
          {/* 
          <div className={styles.loginRegister}>
            <Link className={styles.loginBtn} href={"/"}>
              <p>ورود</p>
              <IoLogIn />
            </Link>
            <Link className={styles.registerBtn} href={"/"}>
              <p>عضویت</p>
              <TiUserAdd />
            </Link>
          </div> */}

          {/* acount details section */}
          <div className={styles.acountBtns}>
            <div className={styles.cardsBtn}>
              <span>1</span>
              <Link href={"/"}>
                <PiHandbagFill />
              </Link>
            </div>
            <div className={styles.cardsBtn}>
              <span>1</span>
              <Link href={"/"}>
                <HiBell />
              </Link>
            </div>

            <div className={styles.myAcount}>
              <div
                className={styles.profileImg}
                onClick={() => {
                  setCoursesDropDown(false);
                  setLinksDropDown(false);
                  setAcountDropDown(!acountDropDown);
                }}
              >
                <Image
                  width={200}
                  height={200}
                  src="/images/default-profile.png"
                  priority={true}
                  alt="png"
                ></Image>
                {acountDropDown && (
                  <div className={styles.dropDownBox}>
                    <ul className={styles.acountDropDownList}>
                      <li className={styles.dropDownListItem}>
                        <FaRegUserCircle />

                        <Link href={"/"}>پنل کاربری</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <IoVideocamOutline />
                        <Link href={"/"}>دوره ها</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <LuWallet />

                        <Link href={"/"}>مالی و اشتراک</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <LuFileQuestion />
                        <Link href={"/"}>پرسش ها</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <IoIosLogOut />
                        <Link href={"/"}>خروج از حساب</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottonNav}>
          <ul className={styles.navLinks}>
            <li className={styles.navListLink}>
              <Link href={"/"}>راکت</Link>
            </li>
            <li
              className={styles.navListLink}
              onClick={() => {
                setCoursesDropDown(!coursesDropDown);
                setLinksDropDown(false);
                setAcountDropDown(false);
              }}
            >
              <span className={styles.dropDown}>
                دوره های آموزشی
                <MdKeyboardArrowDown />
              </span>
              {coursesDropDown && (
                <div className={styles.dropDownBox}>
                  <ul className={styles.coursesDropDownList}>
                    <li className={styles.coursesDropDownListItem}>
                      <Link className={styles.coursesDropDownLink} href={"/"}>
                        <LiaSwatchbookSolid style={{ color: "#9018EE" }} />
                        <div className={styles.coursesDropDownText}>
                          <h4>دوره های آموزشی</h4>
                          <p>لیست دوره های آموزشی ویدیویی راکت</p>
                        </div>
                      </Link>
                    </li>
                    <li className={styles.coursesDropDownListItem}>
                      <Link className={styles.coursesDropDownLink} href={"/"}>
                        <FaRoute style={{ color: "#FFA826" }} />
                        <div className={styles.coursesDropDownText}>
                          <h4>مسیرهای یادگیری</h4>{" "}
                          <p>مسیرهای یادگیری قدم به قدم برنامه نویسی</p>
                        </div>
                      </Link>
                    </li>
                    <li className={styles.coursesDropDownListItem}>
                      <Link className={styles.coursesDropDownLink} href={"/"}>
                        <LuGraduationCap style={{ color: "#E01C4C" }} />
                        <div className={styles.coursesDropDownText}>
                          <h4>گواهی پایان دوره</h4>{" "}
                          <p>گواهی تاییدیه کسب مهارت فنی دوره ها</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.navListLink}>
              <Link href={"/"}>پرسش و پاسخ ها</Link>
            </li>
            <li className={styles.navListLink}>
              <Link href={"/"}>مقالات</Link>
            </li>
            <li className={styles.navListLink}>
              <Link href={"/"}>راکت کست</Link>
            </li>
            <li
              className={styles.navListLink}
              onClick={() => {
                setCoursesDropDown(false);
                setLinksDropDown(!linksDropDown);
                setAcountDropDown(false);
              }}
            >
              <span className={styles.dropDown}>
                <Link href={"/"}>لینک های مفید</Link>
                <MdKeyboardArrowDown />
                {linksDropDown && (
                  <div className={styles.dropDownBox}>
                    <ul className={styles.dropDownList}>
                      <li className={styles.dropDownListItem}>
                        <Link href={"/"}>سوالات متداول</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <Link href={"/"}>درباره ما</Link>
                      </li>
                      <li className={styles.dropDownListItem}>
                        <Link href={"/"}>ارتباط با ما</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
