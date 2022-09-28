import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img className="settingsProfileImage"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Thiago" />
          <label>Email</label>
          <input type="email" placeholder="thiagohenriquedev@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Digite sua senha" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
