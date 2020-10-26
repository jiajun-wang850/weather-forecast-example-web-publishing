import React from "react";
import Menu from "./Menu";

export default function About() {
  return (
    <div className="overflow-hidden">
      <div className="background" />
      <main className="absolute top-0 left-0 w-screen h-screen pt-16 pl-4 overflow-hidden">
        This weather app was created for winemakers.
      </main>
      <Menu />
    </div>
  );
}
