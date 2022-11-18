import React, { useState } from "react";
import axios from "../services/AxiosMainPoint";

const AddTopic = () => {
  const [username, setUsername] = useState({
    user: "",
  });
  const handleOnchange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUsername({ ...username, [name]: value });
  };
  const sendText = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/add", username);

    if (response.data.status === 204) {
      alert(response.data.message);
    } else if (response.data.status === 200) {
      alert(response.data.message);
    }
    alert(`${username}, Item has been added`);

    setUsername({
      username: "",
    });
  };

  return (
    <div className="container">
      <div className="main">
        <div className="landing_page">
          <h1>DASHBOARD:</h1>
        </div>
        <div className="sec_main">
          <h4>TOPIC:</h4>
          <div className="topic_list">
            <form onSubmit={sendText}>
              <label htmlFor="username">
                <textarea
                  id="username"
                  name="username"
                  rows="10"
                  cols="15"
                  value={username.username}
                  onChange={handleOnchange}
                />
              </label>
              <button type="submit">save</button>
            </form>
          </div>
        </div>
      </div>

      {console.log(username)}
    </div>
  );
};

export default AddTopic;
