import React, { useState } from "react";
import "./style.css";
import axios from "../services/AxiosMainPoint";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState({
    user: "",
  });
  const handleOnchange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUsername({ ...username, [name]: value });
  };
  const sendUsename = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/username", username);

    if (response.data.status === 204) {
      alert(response.data.message);
    } else if (response.data.status === 200) {
      alert(response.data.message);
    }
    navigate("/dashboard");

    setUsername({
      username: "",
    });
  };
  return (
    <div className="container">
      <div className="main">
        <div className="landing_page">
          <h1>LANDING PAGE: </h1>
        </div>
        <div className="username">
          <form onSubmit={sendUsename}>
            <label htmlFor="username">
              <input
                className="userName_field"
                name="username"
                type="text"
                placeholder="username"
                value={username.username}
                onChange={handleOnchange}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
