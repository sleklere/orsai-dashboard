import React, { useEffect, useState } from "react";

import classes from "./LastUserInDb.module.css";

function LastUserInDb() {
  const [lastUser, setLastUser] = useState([]);
  useEffect(() => {
    // 'fetchear' usuarios
    fetch("http://localhost:3030/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLastUser(data.users.pop());
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`col-lg-6 mb-4 ${classes.card}`}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last user in Data Base
          </h5>
        </div>
        <div className={`card-body ${classes["card-body"]}`}>
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            src={
              lastUser.image &&
              `http://localhost:3030/imgs/users/${lastUser.image}`
            }
            alt=" Last user in data base "
          />
          <div className="text-center"></div>
          <h3>{`${lastUser.firstName} ${lastUser.lastName}`}</h3>
          <p>{lastUser.email}</p>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default LastUserInDb;
