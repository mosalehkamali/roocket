import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Courses from "@/components/templates/index/courses/Courses";
import Header from "@/components/templates/index/header/Header";
import Podcasts from "@/components/templates/index/podcasts/Podcasts";
import Roadmaps from "@/components/templates/index/roadmaps/Roadmaps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Courses />
      <Roadmaps />
      <Podcasts />
      <Footer />
    </>
  );
}
