import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import "./CSS/success.css";

function Success() {
  const { state } = useLocation();
  return (
    <div className="success-container">
      <Paper style={{ padding: 40 }}>
        <Typography
          style={{
            textAlign: "center",
            padding: "20px 0 0 0",
            color: "green",
            fontSize: "2rem",
            fontWeight: 500,
          }}
        >
          Congratulations!
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            padding: "5px 0 40px 0",
            color: "green",
            fontSize: "1.3rem",
          }}
        >
          SuccessFully Registered
        </Typography>
        <hr />
        <div className="headding">
          <Avatar src={state.logo} />
          <div className="name-and-email">
            <Typography>{state.name}</Typography>
            <Typography>{state.email}</Typography>
          </div>
        </div>
        <hr />
        <Typography style={{ textAlign: "center", fontWeight: 600 }}>About</Typography>
        <Typography>{state.about}</Typography>
        <hr />
        <Typography>Contact : {state.contact}</Typography>
        <Typography>Address : {state.address}</Typography>
      </Paper>
    </div>
  );
}

export default Success;
