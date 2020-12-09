import React from "react";
import CourseList from "./CourseList";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <CourseList />
      <Footer />
    </div>
  );
}

export default Home;
