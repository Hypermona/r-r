import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./CSS/registration.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState({ name: "" });
  const [about, setAbout] = useState("");

  const { push } = useHistory();
  const handleSubmit = () => {
    console.log(name, email, contact, address, logo, about);
    push("/home", { name, email, contact, address, logo, about });
  };
  const HandleLogo = (e) => {
    let fReader = new FileReader();
    fReader.readAsDataURL(e.target.files[0]);
    fReader.onloadend = function (event) {
      setLogo(event.target.result);
    };
  };
  return (
    <>
      <p className="title">New Recruiter Register here</p>

      <form className="registration-container" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          type="number"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Address"
          rows={3}
          maxRows={4}
          multiline
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
        />
        <label htmlFor="company-logo" style={{ color: "gray" }}>
          Company Logo
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            id="company-logo"
            onChange={HandleLogo}
            style={{ marginTop: 10 }}
          />
        </label>

        <TextField
          id="outlined-basic"
          label="About Your Company"
          multiline
          maxRows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={2}
          variant="outlined"
        />
        <Button color="primary" variant="contained" onClick={() => handleSubmit()}>
          Register
        </Button>
      </form>
    </>
  );
}
