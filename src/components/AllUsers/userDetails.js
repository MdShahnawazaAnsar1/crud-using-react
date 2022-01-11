/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getUser } from "../../services/api";
import student from "../AllUsers/user.png";
import { useParams } from "react-router-dom";
import "./AllUsers.css";
import { Row,Col } from "react-grid-system";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUsers] = useState(initialValue);

  useEffect(async () => {
    const response = await getUser(id);
    console.log(response);
    setUsers(response.data);
  }, [id]);
  console.log(id);
  return (
    <div className="userDetails">
      <div className="details">
        <h2>Details</h2>
        <Card className="card">
          <img src={student} alt={user.name} />
          <Row className="row">
            <Col className="col" xs={5}>Name</Col>
            <Col className="col" xs={6}>: {user.name}</Col>
          </Row>
          <Row className="row">
            <Col className="col" xs={5}>Email</Col>
            <Col className="col" xs={6}>: {user.email}</Col>
          </Row>
          <Row className="row">
            <Col className="col" xs={5}>User Name</Col>
            <Col className="col" xs={6}>: {user.username}</Col>
          </Row>
          <Row className="row">
            <Col className="col" xs={5}>Phone</Col>
            <Col className="col" xs={6}>: {user.phone}</Col>
          </Row>
          
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;
