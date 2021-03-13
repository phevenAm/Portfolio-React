import React from "react";
import profile from "../data/profile.json";
import "../Component Styles/Home/Home.css";
import { Header } from "../Components";
console.log(profile);
const Home = () => {
  return (
    <div className="home container">
      <Header />
      <div className="home_block clrblock">
        <h1 className="home__header">Stephen Missah</h1>
        <div className="profile">
          <div className="profile__image">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/276/a051c49504011.59628bcd48106.jpg"
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
