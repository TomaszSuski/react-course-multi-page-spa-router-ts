import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export interface RootLayoutProps {}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
