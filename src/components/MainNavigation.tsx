import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export interface MainNavigationProps {}

export default function MainNavigation(props: MainNavigationProps) {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
