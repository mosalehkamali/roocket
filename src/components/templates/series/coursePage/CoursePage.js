import React from "react";
import CoureseHeader from "./courseHeader/CoureseHeader";
import styles from "./CoursePage.module.css";
import CourseDisc from "./courseDisc/courseDisc";
import CourseSessions from "./courseSessions/courseSessions";

function CoursePage() {
  return (
    <div className={styles.CoursePage}>
      <CoureseHeader />
      <CourseDisc />
      <CourseSessions />
    </div>
  );
}

export default CoursePage;
