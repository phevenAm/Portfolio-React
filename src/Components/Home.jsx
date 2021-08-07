import React from "react";
import profile from "../data/profile.json";
import "../css/Home.css";
import { Header } from "../Components";
console.log(profile);
const Home = () => {
  return (
    <div className="home container">
    <div className="left-block block">
        <Header className="nav" />
    </div>
      <div className="right-block block">
        <div className="profile_block clrblock">
        <div className="profile__header">
          <h1 className="profile__headerName">Stephen Missah</h1>

          <div className="profile__headerKeyPoints">
            <div className="quote"><p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolorem ex a praesentium enim deleniti minus sunt ea nihil nulla?</p></div>
            <ul>
              <li>Key point</li>
              <li>Key point</li>
              <li>Key point</li>
              <li>Key point</li>
            </ul>
          </div>
        </div>
        <div className="profile__imageContainer">
              <div className="profile__image">
              <img
                src="https://www.ragroup.co.uk/wp-content/uploads/2018/11/placeholder-profile-sq.jpg"
                alt="profile"
              />
              <h3 className="profile__subtitle">
                Product Designer, turned Developer
              </h3>
          </div>
         </div>
        <div className="profile__text">
          <p> ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure sunt quas quis magni quasi odio distinctio, exercitationem nihil impedit?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quod dicta repudiandae voluptatem voluptates pariatur. 
          </p>
          <p>  Quos facere dolorum consectetur blanditiis nobis porro architecto maiores omnis, nemo quae. Non, ipsam illo quia adipisci voluptate nihil minima maxime quis iusto unde vel consequatur inventore iste explicabo? Fugit, sit! Deleniti, vero soluta.
          </p>
        </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
