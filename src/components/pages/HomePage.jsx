import React from "react";
import Header from "../Header";
import TopSeller from "../TopSellers"



function HomePage() {
  
  return (
    <div className="home-page">
      <Header title="Welcome to Kosovo Amazon" />
      <TopSeller/>
    </div>
  );
}

export default HomePage;
