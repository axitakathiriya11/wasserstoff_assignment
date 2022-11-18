import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="main">
        <div className="landing_page">
          <h1>DASHBOARD:</h1>
        </div>
        <div className="sec_main">
          <button
            className="btn"
            onClick={() => {
              navigate("/AddTopic");
            }}
          >
            ADD TOPIC:
          </button>
          <div className="topic_list">
            <h4>TOPIC LIST:</h4>

            {data.map((vl, id) => {
              return (
                <ul>
                  <li
                    style={{
                      listStyle: "none",
                    }}
                    key={id}
                  >
                    {vl.topic}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
