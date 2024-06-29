import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import CoursePage from "@/components/templates/series/coursePage/CoursePage";
import React from "react";

function course() {
  return (
    <>
      <Navbar />
      <CoursePage />
      <Footer />
    </>
  );
}

export default course;
