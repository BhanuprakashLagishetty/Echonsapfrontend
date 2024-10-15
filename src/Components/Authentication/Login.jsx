import React, {useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import CustomeTextFiled from "../CustomeTextFiled";
import { Link, useNavigate } from "react-router-dom";
import {getDataFromLocalStorage,storeDataToLocalStorage,} from "../../utils/PersistantData";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../features/todo/echosnapSlice";
import SnackBar from "../SnackBar";



export default function Login() {
  const [error, setErrror] = useState(false);
  const[resposnseType,setResponseType]=useState("process")
  const [openSackBar, setOpenSackBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (response) => {
    storeDataToLocalStorage("user", response.data);
    dispatch(setUserDetails(getDataFromLocalStorage("user")));
  };
  const sendUserDate = async (userData) => {
    await axios
      .post("http://localhost:8000/api/v1/auth/login", {
        username: userData.username,
        password: userData.password,
      })
      .then((response) => {
        handleLogin(response);
        console.log(response.data, "response");
        setResponseType("SUCCESS")
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setErrror(true);
        setOpenSackBar(true)

        setResponseType("ERROR")
      });
  };
  const handleSubmition = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

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
          fontSize: "19px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Login here
      </Typography>

      <CustomeTextFiled
        name={"username"}
        label={"username"}
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

      <Button
        type="submit"
        variant="contained"
        sx={{ width: "44.7ch", m: 1, padding: "15px", height: "2.8rem" }}
      >
        Submit
      </Button>
      <Link to={"/register"} style={{ paddingLeft: "10px" }}>
        Don't have account ?
      </Link>
      
       
        {error && (
          <SnackBar open={openSackBar} setOpen={setOpenSackBar} setErrror={setErrror} type={resposnseType} />
        )}
  
    </Box>
  );
}
