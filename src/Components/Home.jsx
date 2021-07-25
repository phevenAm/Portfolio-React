import React from "react";
import profile from "../data/profile.json";
import "../Component Styles/Home/Home.css";
import { Header } from "../Components";
console.log(profile);
const Home = () => {
  return (
    <div className="home container">
      <Header className="nav" />
      <div className="home_block clrblock">
        <h1 className="home__header">Stephen Missah</h1>
        <div className="profile">
          <div className="profile__image">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="profile"
              className="profile__imageImg"
            />
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
