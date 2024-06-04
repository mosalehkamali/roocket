import Navbar from "@/components/modules/navbar/Navbar";
import Courses from "@/components/templates/index/courses/Courses";
import Header from "@/components/templates/index/header/Header";
import Roadmaps from "@/components/templates/index/roadmaps/Roadmaps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Courses />
      <Roadmaps />
    </>
  );
}
