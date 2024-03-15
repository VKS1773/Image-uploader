import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Mern Image Upload projects</h1>
      <div className="text-end">
        <button className=" btn btn-primary ">
          <Link to="/register" className="text-decoration-none text-white">
            Add user
          </Link>
        </button>
      </div>
      <div className="row d-flex justify-content-between align-items-center mt-1 ">
        <div className="card mt-3" style={{ width: "22rem" }}>
          <img
            src="/first.jpg"
            className="mt-3 m-auto rounded-3 "
            style={{ width: "100px" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">UserName:Vikash</h5>
            <p>Date Added:08/15/2022</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mt-3" style={{ width: "22rem" }}>
          <img
            src="/first.jpg"
            className="mt-3 m-auto rounded-3 "
            style={{ width: "100px" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">UserName:Vikash</h5>
            <p>Date Added:08/15/2022</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mt-3" style={{ width: "22rem" }}>
          <img
            src="/first.jpg"
            className="mt-3 m-auto rounded-3 "
            style={{ width: "100px" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">UserName:Vikash</h5>
            <p>Date Added:08/15/2022</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mt-3" style={{ width: "22rem" }}>
          <img
            src="/first.jpg"
            className="mt-3 m-auto rounded-3 "
            style={{ width: "100px" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">UserName:Vikash</h5>
            <p>Date Added:08/15/2022</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
