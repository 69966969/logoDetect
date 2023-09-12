import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim white underline pa3 pointer"
          id="font"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim white underline pa3 pointer"
          id="font"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim white underline pa3 pointer"
          id="font"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
