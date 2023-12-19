import React from "react";
import "./infoUser.css";

const InfoUser = () => {
  return (
    <section className="infoUser">
      <div className="userInfo__container">
        <div className="userInfo-img__container">
          <img src="../../img/user.png" alt="User" className="userInfo__img" />
        </div>
        <div className="userInfo__name-email">
          <h3 className="userInfo__name">Someone</h3>
          <span className="userInfo__email">someone@example.com</span>
        </div>
      </div>
    </section>
  );
};

export default InfoUser;
