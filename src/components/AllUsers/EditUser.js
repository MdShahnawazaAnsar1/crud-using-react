import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./AddUser.css";
import { getUser, UpdateDetails } from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const [user, setuser] = useState(initialValue);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const { name, username, email, phone } = user;
  const { id } = useParams();
  console.log(id);
  const navigation = useNavigate();
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUserData = async () => {
    const response = await getUser(id);
    setuser(response.data);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const editUserData = async () => {
    if (user.name === "") {
      setSnackBar({
        open: true,
        severity: "warning",
        message: "Name can not be empty!",
      });
      return;
    } else if (user.username === "") {
      setSnackBar({
        open: true,
        severity: "warning",
        message: "User Name can not be empty!",
      });
      return;
    } else if (user.email === "") {
      setSnackBar({
        open: true,
        severity: "warning",
        message: "Email can not be empty!",
      });
      return;
    } else if (user.phone === "") {
      setSnackBar({
        open: true,
        severity: "warning",
        message: "Phone Number can not be empty!",
      });
      return;
    } else {
      await UpdateDetails(id, user);
      navigation("/all");
    }
  };

  return (
    <div className="addUser">
      <Typography variant="h4">Edit User</Typography>
      <FormGroup>
        <FormControl style={{ marginTop: "10px" }}>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl style={{ marginTop: "10px" }}>
          <InputLabel>User Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl style={{ marginTop: "10px" }}>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl style={{ marginTop: "10px" }}>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <button onClick={() => editUserData()} className="addBtn">
          Update
        </button>
      </FormGroup>
      <Snackbar
        style={{ top: "20px", zIndex: "999999" }}
        open={snackBar.open}
        autoHideDuration={3000}
        onClose={() => {
          setSnackBar({ ...snackBar, open: false });
        }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          severity={snackBar.severity}
          onClose={() => {
            setSnackBar({ ...snackBar, open: false });
          }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditUser;
// login page
