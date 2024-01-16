import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export interface MainNavigationProps {}

export default function MainNavigation(props: MainNavigationProps) {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              // NavLink przyjmuje specjalny rodzaj propa className, który jest funkcją
              // która przyjmuje obiekt z informacją czy dany link jest aktywny czy nie
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // prop end zapewnia, że link nie będzie aktywny, jeśli aktywują się jego dzieci (dalszy ciąg ścieżki)
              // czyli jeśli aktywny będzie link /products/1 to link /products nie będzie aktywny
              // dzięki temu nie będziemy mieli dwóch aktywnych linków na raz
              // choć w tym przypadku działa to natywnie również bez tego propa
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
