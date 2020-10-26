import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <footer className="absolute bottom-0 left-0 pr-4 pb-4 text-sm">
      <nav className="flex w-32 justify-evenly text-gray-500">
        <Link to="/">Weather</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  );
}
