import React, { useEffect, useState } from "react";

const User = () => {
  // let userData = "deneme"

  const [userData, setUserData] = useState();

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // fetch("https://randomuser.me/api")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data.results[0]))
    //   .catch((err) => console.log(err))
    //! ComponentDidMount
    const timer = setInterval(getUser, 3000);
    getUser();

    //! ComponentWillUnMount
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(userData);
  return (
    <div className="row justify-content-center p-5">
      {/* Optional Chaining */}
      <div className="col col-sm-6 col-md-4 col-lg-3">
        <div className="card bg-light">
          <img
            src={userData?.picture?.large}
            className="rounded-circle img-thumbnail btn"
            alt=""
          />
          <h4>Hi, My Name is</h4>
          <h1 className="btn btn-danger">
            {userData?.name?.first} {userData?.name?.last}
          </h1>
          <h3 className="btn btn-dark">{userData?.email}</h3>
          <h4 className="btn btn-primary">{new Date(userData?.dob?.date).toLocaleDateString()}</h4>
          <h5 className="btn btn-warning">{userData?.phone}</h5>
          <h6 className="btn btn-info">{userData?.location?.city}</h6>

          <button className="btn btn-outline-success rounded-pill" onClick={getUser}>
            Get Random User
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
