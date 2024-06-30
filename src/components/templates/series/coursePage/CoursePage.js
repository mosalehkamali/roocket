import React from 'react'
import CoureseHeader from './courseHeader/CoureseHeader'
import styles from "./CoursePage.module.css"
import CourseDisc from './courseDisc/courseDisc'

function CoursePage() {
  return (
    <div className={styles.CoursePage}>
     <CoureseHeader/> 
     <CourseDisc/>
    </div>
  )
}

export default CoursePage
