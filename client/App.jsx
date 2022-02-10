import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="title" style={{ paddingTop: "20px"}}>
        Messenge
        <NavLink
          to="/secretPage"
          className="title"
          style={({ isActive }) =>
            isActive ? { display: "none" } : { textDecoration: "none" }
          }
        >
          r 
        </NavLink>
         Pigeon
      </h1>
      <img src={"./build/assets/pigeonlogo.png"} style={{ display:"block", marginLeft:"auto", marginRight:"auto", height:"150px", width:"auto" }}></img>
      <Outlet />
    </div>
  );
};

export default App;
