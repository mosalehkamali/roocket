"use client";

import React, { useState } from "react";
import styles from "./Podcast.module.css";
import Link from "next/link";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiArrowLeftFill } from "react-icons/pi";
import { SaveButton } from "../styled/Styled";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function Podcast() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const likeCourse = () => {
    setIsLiked(!isLiked);
  };

  const saveItem = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={styles.courseCard}>
      <div className={styles.cardImg}>
        <Link href={"/"} className={styles.courseImg}>
          <Image
            width={500}
            height={500}
            src={"/images/default-cours.jpg"}
            alt="course-image"
          ></Image>
        </Link>
      </div>

      <div className={styles.courseInfo}>
        <span className={styles.courseStatus}>شماره 7</span>
        <div className={styles.courseRate}>
          <SaveButton onClick={saveItem}>
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
          </SaveButton>
          <div className={styles.courseDuration}>
            <GoClock />
            <p>06:27:32</p>
          </div>

          <div onClick={likeCourse} className={styles.courseLikes}>
            {isLiked ? <IoMdHeart /> : <IoIosHeartEmpty />}
            <p>241</p>
          </div>
        </div>
      </div>

      <Link href={"/"} className={styles.courseTitle}>
        <span>آموزش Next.js</span>
      </Link>
      <div>
        <Link href={"/"} className={styles.courseInfoBtn}>
          <span>مشاهده اطلاعات دوره</span>
          <PiArrowLeftFill />
        </Link>
      </div>
    </div>
  );
}

export default Podcast;
