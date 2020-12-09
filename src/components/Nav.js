import React from "react";
import "./Nav.css";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav>
    <Link to="/">
      <h2>QUIZ ME</h2>
    </Link>
    <Link to="/endpage">
      <IconButton className="forum">
        <ForumRoundedIcon fontSize="large" />
      </IconButton>
    </Link>
  </nav>
);

export default Nav;
