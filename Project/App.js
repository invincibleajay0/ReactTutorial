import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Flogo-design%2Fcontests%2Flogo-f%25C3%25BCr-ein-internationales-food-app-solle-alle-1076284&psig=AOvVaw2d_rHF0qnUBJKXTgx80TQf&ust=1753940736278000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMCr2ciR5Y4DFQAAAAAdAAAAABAE" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img/>
            <h3>Meghna Foods</h3>
            <h4>Asian, Chinese, North Indian</h4>
            <h4>4 star</h4>
            <h4>38 min</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div> 
            <div className="res-container">
            <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
