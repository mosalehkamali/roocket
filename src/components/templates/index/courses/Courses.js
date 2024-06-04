import React from "react";
import styles from "./Courses.module.css";
import { PiArrowLeftFill, PiCirclesThreeFill } from "react-icons/pi";
import Link from "next/link";
function Courses() {
  return (
    <>
      <div className={styles.courses}>
        <div className={styles.coursesHeader}>
          <div className={styles.coursesTitle}>
            <PiCirclesThreeFill />
            <h3>آخرین دوره ها</h3>
          </div>
          <Link href={"/"} className={styles.allCoursesBtn}>
            <span>مشاهده همه دوره ها</span>
            <PiArrowLeftFill />
          </Link>
        </div>
        {/* show lastes courses */}
        <div className={styles.lastCourses}></div>
      </div>
    </>
  );
}

export default Courses;
