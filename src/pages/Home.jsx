import React from "react";
import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/home/HomeSection2";
import TopInfoBar from "../components/Navbar/TopInfoBar";

function Home() {
  return (
    <>
      <TopInfoBar />
      <div className="min-h-screen">
        <HomeSection1 />
        <HomeSection2 />
      </div>
      
    </>
  );
}

export default Home;
