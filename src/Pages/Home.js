import React from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-div">
        <div className="top">
          <p>
            Proident anim <span class="bold1">nor nulla iste.</span>
          </p>
        </div>
        <div className="bottom">
          <p className="tag-p">Minim modi yet omnis nor quia so minima.</p>
          <button
            className="btn"
            style={{ backgroundColor: "#003057", color: "white" }}
          >
            <AiOutlineMail className="icon" /> Ipsum Lorem
          </button>
          <button className="btn">
            <AiOutlineLink className="icon" />
            Ipsum Lorem
          </button>
          <button className="btn">
            <HiOutlineLocationMarker className="icon" />
            Ipsum Lorem
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="div-left">
          <div className="div-left-top">
            <img
              className="img"
              src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
              alt="img"
              // style={{ height: "398px", width: "100%" }}
            />
          </div>
          <div className="div-left-bottom">
            <div className="div-left-link">
              <h3>
                {" "}
                <AiOutlineLink /> lorem ipsum{" "}
              </h3>
              <h3>
                {" "}
                <AiOutlineLink /> lorem ipsum{" "}
              </h3>
            </div>
            <h3>
              {" "}
              <AiOutlineLink /> lorem ipsum{" "}
            </h3>
          </div>
        </div>
        <div className="div-right">
          <div className="div-top-right">
            <p>
              Numquam. <span class="bold">Esse aliquip do, magni.</span>
            </p>
            <span className="tag">Minima ad for vitae sit</span>
            <p>Ipsum Lorem</p>
          </div>
          <div className="div-mid-right">
            <img
              src="https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg"
              alt="img"
              style={{ height: "161px", width: "100%" }}
            />
          </div>
          <div className="div-bottom-right">
            <button className="btn2">
              <h4 style={{ color: "white" }}>
                <AiOutlineLink /> lorem ipsum
              </h4>
            </button>
            <p>
              Adipisicing unde vel so dolore,
              <br /> consequatur.
            </p>
            <p>Ipsum Lorem</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
