import React from "react";
import Carousel from "../../../Components/Carousel";
import Creatives from "../../../Components/Creatives";

const MainPresenter = () => {
  return (
    <div className="mt80">
      <Carousel title="NFT List" />
      <Creatives />
    </div>
  );
};

export default MainPresenter;
