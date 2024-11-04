import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

export default function UpSkill() {
  return (
    <div className="w-full h-full flex">
      <Aside />

      {/* Main */}
      <main className="w-full">
        <Header />
      </main>
    </div>
  );
}
