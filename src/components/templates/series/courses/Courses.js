import React from "react";
import styles from "./Courses.module.css";
import { GoDotFill } from "react-icons/go";
import Course from "@/components/modules/cards/Course";
function courses() {
  return (
    <div className={styles.courses}>
      <h2 className={styles.title}>دوره های آموزشی</h2>

      <div className={styles.container}>

        <div className={styles.filters}>
          <span className={styles.filtersTitle}>مرتب سازی براساس</span>
          <ul>
            <li className={styles.option}><GoDotFill />رایگان</li>
            <li className={styles.option}><GoDotFill />نقدی</li>
            <li className={styles.option}><GoDotFill />اعضای ویژه</li>
            <li className={styles.option}><GoDotFill />درحال برگزاری</li>
            <li className={styles.option}><GoDotFill />تکمیل ضبط شده ها</li>
          </ul>
        </div>

        <div className={styles.courseList}>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
        </div>
      </div>
    </div>
  );
}

export default courses;
