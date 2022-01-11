import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AddUser.css";
import { addUser } from "../../services/api";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  id: "",
};
const AddUser = () => {
  const [user, setuser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  let navigation = useNavigate();
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetals = async () => {
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
      await addUser(user);

      navigation("/all");
    }
  };
  return (
    <>
      <div className="addUser">
        <Typography variant="h4">Add User</Typography>
        <FormGroup>
          <FormControl style={{ marginTop: "10px" }}>
            <InputLabel>Name</InputLabel>
            <Input
              error={name === " "}
              type="text"
              required={true}
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl style={{ marginTop: "10px" }}>
            <InputLabel>User Name</InputLabel>
            <Input
              type="text"
              required
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
            />
          </FormControl>
          <FormControl style={{ marginTop: "10px" }}>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl style={{ marginTop: "10px" }}>
            <InputLabel>Phone</InputLabel>
            <Input
              type="number"
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
            />
          </FormControl>
          <button onClick={() => addUserDetals()} className="addBtn">
            Add User
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
    </>
  );
};

export default AddUser;
