import React from "react";
import { Link } from "react-router-dom";
import "./CourseList.css";

function CourseList() {
  return (
    <div className="courses">
      <h3 className="heading">Available Courses:</h3>
      <Link to="/questions/CSC205" className="link">
        <button className="course">CSC 205</button>
      </Link>
      <Link to="/questions/CSC207" className="link">
        <button className="course">CSC 207</button>
      </Link>
    </div>
  );
}

export default CourseList;
