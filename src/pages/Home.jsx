import React from "react";
import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/Home/homesection2";
import TopInfoBar from "../components/Navbar/TopInfoBar";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HomeSection1 />
      </div>
      <HomeSection2 />
    </>
  );
}

export default Home;
