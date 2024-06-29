import Navbar from "@/components/modules/navbar/Navbar";
import Courses from "@/components/templates/series/courses/Courses";
import Roadmaps from "@/components/templates/index/roadmaps/Roadmaps";
import React from "react";
import Footer from "@/components/modules/footer/Footer";

function series() {
  return (
    <>
      <Navbar />
      <Roadmaps />
      <Courses/>
      <Footer/>
    </>
  );
}

export default series;
