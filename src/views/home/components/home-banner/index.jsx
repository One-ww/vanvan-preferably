import React, { memo } from "react";
import { Carousel } from "antd";
import { HomeBannerWrapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      <Carousel autoplay arrows style={{ width: "1032px" }}>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/1.png")}
            className="img"
          />
        </div>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/2.png")}
            className="img"
          />
        </div>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/3.png")}
            className="img"
          />
        </div>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/4.png")}
            className="img"
          />
        </div>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/5.png")}
            className="img"
          />
        </div>
        <div className="item">
          <img
            alt=""
            src={require("../../../../assets/img/home-banner/6.png")}
            className="img"
          />
        </div>
      </Carousel>
    </HomeBannerWrapper>
  );
});

export default HomeBanner;
