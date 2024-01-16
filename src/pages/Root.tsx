import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

export interface RootLayoutProps {}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
