import React from "react";
import profile from "../data/profile.json";
import "../css/Home.css";
import { Header } from "../Components";
console.log(profile);
const Home = () => {
  return (
    <div className="home container">
      <Header className="nav" />
      <div className="profile_block clrblock">
        <div className="profile__header">
          <h1 className="profile__headerName">Stephen Missah</h1>
        </div>
         <div className="profile__imageContainer">
              <div className="profile__image">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="profile"
              />
              <h5 className="profile__subtitle">
                Product Designer, turned Developer
              </h5>
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
  );
};

export default Home;
