import React from "react";
import "./dashboard.css";
const dashboard = ({ alluser, showAllUer, addUser }) => {
  return (
    <div className="dashboard">
      <div className="banner">
        <h1>CRUD APPLICATION USING MERN</h1>
        <div className="content">
          <h3>MERN Stands For</h3>
          <ul>
            <li>MongoDB</li>
            <p>
              It is NoSql Database documents which act as a backend four our
              MERN stack web application.
            </p>
          </ul>
          <ul>
            <li>ExpressJS </li>
            <p>
              ExpressJS is a JavaScript-based backend web application framework
              and mostly used to create API for our MERN stack app.
            </p>
          </ul>
          <ul>
            <li>React</li>
            <p>
              React is a JavaScript-based library which is used to build the
              powerful and attractive user interface; it has so many features
              which make to unique among other front-end libraries like Virtual
              DOM.
            </p>
          </ul>
          <ul>
            <li>NodeJS</li>
            <p>
              NodeJS is a JavaScript-based run-time environment, which enables
              us to create a JavaScript-based back-end environment and network
              applications. The main attraction is that in MERN stack everything
              you write is somehow JavaScript. Starting from Database of
              MongoDB, to the front-end technology which is React, so if you
              have enough knowledge of JavaScript then you will find it pretty
              relevant to your technology stack. In this article, we are going
              to cover all of the layers of MERN stack in a step by step manner.
            </p>
          </ul>
        </div>
        <div className="About">
          <h3>About my project</h3>
          <div className="aboutContainer">
            <p>In this project I created four pages.</p>

            <li>
              <a href="/">Dashboard Page</a>
            </li>

            <li>
              <a href="/all">All User Page </a>
            </li>

            <li>
              <a href="/add">Add User Page </a>
            </li>

            <li>Edit User Page</li>
            <li>User Details Page</li>
          </div>
          <h3>Coding Details</h3>
          <div style={{ padding: "10px", marginTop: "-20px" }}>
            <div>
              <h4>Front End</h4>
              <p>
                In front end I have used React JS library and <b>Material UI</b>{" "}
                for better for styling, like <b>Snackbar</b> for notifications
                etc.
              </p>
              <h4>Back End</h4>
              <p>In Back end I have used MongoDB, ExpressJS and Node JS.</p>
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <ul>
              <li>Dashboard Page</li>
              <p>
                In Dashboard page I explained about the MERN Stack and about the
                project like what I have done and what is its functionality?
              </p>
            </ul>
            <ul>
              <li>Add User Page </li>
              <p>
                In Add User page I created a form with properties Name, User
                Name, Email and Phone Number. Where new User can enter their
                details ans after clickng on <b>Add Button</b> he/she can submit
                data and also then I redirect them to ALL User page to see their
                data.
              </p>
            </ul>
            <ul>
              <li>All User Page </li>
              <p>
                In All User page I displayed all the users whose data are in the
                database. Tere is also two buttons to Edit their data an detele
                their data from database.
              </p>
            </ul>
            <ul>
              <li>Edit User Page</li>
              <p>
                {" "}
                In Edit User page I created a form with properties Name,User
                Name,Email and Phone Number. Where existing User can edit or
                update their details and after clickng on <b>
                  Update Button
                </b>{" "}
                he/she can update data and also then I redirect them to ALL User
                page to see their data.
              </p>
            </ul>
            <ul>
              <li>User Details Page</li>
              <p>
                In User Detail page user can see their details in Card like
                Name, User Name, Email, and Phone Number.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
