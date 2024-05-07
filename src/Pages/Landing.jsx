import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/music-beats.gif";
import musicImg from "../assets/music-hear.png";
import musicsetImg from "../assets/music-set.png";
import Drums from "../assets/drums.png";

import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h3>
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <div className="mt-3" style={{ textAlign: "justify" }}>
              Media Player App will allow user to add or remove their uploaded
              videos and also arrange them in different categories by drag and
              drop.User can also manage their watch history as well.What are You
              waiting for,lets start exploring our site
            </div>
            <Link to={"/home"} className="btn btn-info mt-3">
              Get Started
            </Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img className="ms-5" src={LandingImg} alt="" />
          </div>
        </div>
        {/* Features */}
        <div className="Features mt-5">
          <h3 className="text-center">Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={musicImg}
                />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Users can upload,view and rmove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={Drums}
                />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                    Users can cantegories the videos by drag aand drop feature
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={musicsetImg}
                />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    Users can upload,view and rmove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="my-5 row border rounded p-5">
          <div className="col-lg-5">
            <h3 className="text-warning">Simple, Fast and Powerful</h3>
            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">PLAY EVERYTHING</span>: Lorem ipsum dolor
              sit amet consectetur adipisicing elit. laudantium reprehenderit
              odio autem suscipit sunt commodi
            </p>

            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">CATEGORIES</span>: Lorem ipsum dolor sit
              amet consectetur adipisicing elit.laudantium reprehenderit odio
              autem suscipit sunt commodi,
            </p>

            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">MANAGE EVERYTHING</span>: Lorem ipsum dolor
              sit amet consectetur adipisicing elit.laudantium reprehenderit
              odio autem suscipit sunt commodi,
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/Po3jStA673E"
              title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
