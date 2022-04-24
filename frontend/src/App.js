import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import HomeNavbar from "./components/templates/HomeNavbar";
import UserNavbar from "./components/templates/UserNavbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/Login";
import FoodMenu from "./components/users/FoodMenu";
import BuyerDashboard from "./components/users/BuyerDashboard";
import Dashboard2 from "./components/users/dashboard2";

const Layout = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="users" element={<UsersList />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/profile" element={<UserLayout />}>
          <Route path="buyerdashboard" element={<BuyerDashboard />} />
          <Route path="foodmenu" element={<FoodMenu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="dashboard2" element={<Dashboard2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
