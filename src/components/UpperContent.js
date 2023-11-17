import React from "react";
import TitleImage from "../img/homepage.webp"

function UpperContent() {
  return (
    <div className="upper-content">
      <div className="image-container">
        <h2 className="greeting-text">Welcome!</h2>
        <img src={TitleImage} />
      </div>
      <h2 className="intro-title">Online Experiences</h2>
      <p className="intro-desc">Airbnb is a globally recognized online marketplace that facilitates the rental and booking of lodging accommodations. Founded in 2008 by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk, Airbnb has transformed the way people travel by providing a platform for individuals to rent out their homes, apartments, or spare rooms to travelers. Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
    </div>
  )
}

export default UpperContent;