import React from "react";
import Seo from "../components/seo";
import ListProducts from "../components/List-products"; 

const IndexPage = () => {

  return (
    <div className="home__container">
      <Seo title="Homepage" />
      <div className="home__wrapper">
        <div>Home</div>
        <ListProducts />
      </div>
    </div>
  )
}

export default IndexPage
