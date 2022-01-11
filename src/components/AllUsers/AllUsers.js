import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../../services/api";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const getAllUsers = async () => {
    const response = await getUser();
    console.log(response);
    setUsers(response.data);
  };
  console.log(users);
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
    setSnackBar({open: true,
      severity: "error",
      message: "Deleted successfully",})
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          style={{ margin: "50px 10%", width: "80%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">UserName</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <StyledTableRow key={u._id}>
                <StyledTableCell component="th" scope="row">
                  <Button to={`/detail/${u._id}`} component={Link}>
                    {u.name}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="left">{u.username}</StyledTableCell>
                <StyledTableCell align="left">{u.email}</StyledTableCell>
                <StyledTableCell align="left">{u.phone}</StyledTableCell>
                <StyledTableCell align="left">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                    to={`/edit/${u._id}`}
                    component={Link}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                    to={`/edit/${u.id}`}
                    onClick={() => deleteUserDetails(u._id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </>
  );
};

export default AllUsers;
