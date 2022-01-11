import AllUsers from "./components/AllUsers/AllUsers";
import AddUser from "./components/AllUsers/AddUser";
import EditUser from ".//components/AllUsers/EditUser";
import Header from "./components/Header/Header";
import UserDetails from "./components/AllUsers/userDetails";
import Dashboard from "./components/Dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route exact path="/detail/:id" element={<UserDetails />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
