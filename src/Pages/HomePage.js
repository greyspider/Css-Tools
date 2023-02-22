import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Home/Main";
const HomePage = () => {
  return (
    <>
      <div className="allContent">
        <Main />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
