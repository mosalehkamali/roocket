import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { PiHandbagFill } from "react-icons/pi";
import { HiBell } from "react-icons/hi";
import { TiUserAdd } from "react-icons/ti";
import { IoLogIn } from "react-icons/io5";

function Navbar() {
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

          {/* <div className={styles.loginRegister}>
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
              <Link href={"/"}>
                <PiHandbagFill />
              </Link>
            </div>
            <div className={styles.cardsBtn}>
              <Link href={"/"}>
                <HiBell />
              </Link>
            </div>

            <div className={styles.myAcount}>
              <div className={styles.profileImg}>
                <Image
                  width={200}
                  height={200}
                  src="/images/default-profile.png"
                  alt="png"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottonNav}></div>

      </nav>
    </>
  );
}

export default Navbar;
