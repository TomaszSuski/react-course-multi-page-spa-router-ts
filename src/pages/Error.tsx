import React from "react";
import MainNavigation from "../components/MainNavigation";

export interface ErrorPageProps {}

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}