import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import BasicDatePicker from "../BasicDatePicker";
import axios from "axios";
import GenderButton from "../GenderButton";
import CustomeTextFiled from "../CustomeTextFiled";
import { Link, useNavigate } from "react-router-dom";
import SnackBar from "../SnackBar";

export default function Register() {
  const [error, setErrror] = useState(false);
  const[resposnseType,setResponseType]=useState("process")
  const [openSackBar, setOpenSackBar] = useState(false);
  const navigate = useNavigate();
  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (error) {
      setOpenSackBar(true);
    }
  }, [error,openSackBar]);
  

  const sendUserDate = async (userData) => {
    await axios
      .post("http://localhost:8000/api/v1/user", {
        email: userData.email,
        mobile: userData.phoneNumber,
        username: userData.username,
        dob: userData.dateOfBirth,
        first_name: userData.firstName,
        last_name: userData.lastName,
        password: userData.password,
        gender: userData.gender,
      })
      .then((response) => {
        console.log(response);
        setResponseType("SUCCESS")
        navigate("/login");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setResponseType("ERROR")
        setErrror(true);
      });
  };
  const handleSubmition = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data, "data");
    data.dateOfBirth = formateDate(data.dateOfBirth);

    sendUserDate(data);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmition}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch", borderRadius: "30px" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Register here
      </Typography>

      <CustomeTextFiled
        name={"username"}
        label={"username"}
        sx={{ marginTop: "10px" }}
      />

      <Box
        sx={{
          display: "flex",
          width: "40ch",
          m: 1,
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <CustomeTextFiled
          name={"firstName"}
          label={"first name"}
          sx={{ m: 0, width: "10ch" }}
        />

        <CustomeTextFiled
          label="Last Name"
          name="lastName"
          sx={{ m: 0, width: "10ch" }}
        />
      </Box>

      <CustomeTextFiled
        required
        id="outlined-required"
        label="Email"
        name="email"
        sx={{ marginTop: "10px" }}
      />
      <CustomeTextFiled
        id="outlined-password-input"
        required
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        sx={{ marginTop: "10px" }}
      />
      <GenderButton />
      <CustomeTextFiled
        required
        type="number"
        id="outlined-required"
        label="Phone Number"
        name="phoneNumber"
        sx={{ marginTop: "10px" }}
      />

      <BasicDatePicker />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: "44.7ch", m: 1, padding: "10px" }}
      >
        Submit
      </Button>
      <Typography>
        All ready having account? <Link to={"/login"}>Login</Link>
      </Typography>
      
      {error && (
        <SnackBar open={openSackBar} setOpen={setOpenSackBar} setErrror={setErrror} type={resposnseType} />
      )}
    </Box>
  );
}
