import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [fname, setFname] = useState("");
  const [file, setFile] = useState("");

  const setdata = (e) => {
    const { value } = e.target;
    setFname(value);
  };
  const setfiledata = (e) => {
    setFile(e.target.files[0]);
  };

  const adddata = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("photo", file);
    formdata.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post("/register", formdata, config);
    console.log(res);
  };
  return (
    <div className="container">
      <h1>Upload your image here</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="fname"
            onChange={setdata}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputPassword1"
            name="photo"
            onChange={setfiledata}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={adddata}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
