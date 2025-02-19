import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#2C2C2C", borderBottom: "3px solid #4CAF50" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#4CAF50" }}>
          Google Form Clone
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/forms"
          sx={{ color: "#ffffff" }}
        >
          Forms
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{ color: "#ffffff" }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
