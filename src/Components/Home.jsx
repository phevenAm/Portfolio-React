import React from "react";
import "../Component Styles/Home/Home.css";
import { Header } from "../Components";

const Home = () => {
  return (
    <div className="home container">
      <Header />
      <div className="home_block clrblock">
        <h1 className="home__header">Stephen Missah</h1>
        <div className="profile">
          <div className="profile__image">
            <h5 className="profile__subtitle">
              Product Designer, turned Developer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
