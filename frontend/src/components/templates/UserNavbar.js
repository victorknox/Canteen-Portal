import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserNavbar = () => {
  const navigate = useNavigate();
  

  if(localStorage.getItem("usertype") === "buyer")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          >
            My Profile
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/profile/dashboard2")}>
            My Orders
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile/buyerdashboard")}>
            Dashoboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/")}>
            Logout
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
  else
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          >
            My Profile
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/profile/foodmenu")}>
            Food Menu
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile/statistics")}>
            Statistics
          </Button>
          <Button color="inherit" onClick={() => navigate("/")}>
            Logout
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UserNavbar;
