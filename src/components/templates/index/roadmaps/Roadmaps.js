import React from "react";
import styles from "./Roadmaps.module.css";
import { PiArrowLeftFill, PiCirclesThreeFill } from "react-icons/pi";
import Link from "next/link";
import Road from "@/components/modules/cards/Road";
function Roadmaps() {
  return (
    <div className={styles.roadmaps}>
      <div className={styles.coursesHeader}>
        <div className={styles.coursesTitle}>
          <PiCirclesThreeFill />
          <h3>مسیرهای یادگیری</h3>
        </div>
        <Link href={"/"} className={styles.allCoursesBtn}>
          <span>مشاهده همه مسیرهای یادگیری</span>
          <PiArrowLeftFill />
        </Link>
      </div>
      <Road />
    </div>
  );
}

export default Roadmaps;
