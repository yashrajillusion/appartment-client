import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flexdiv">
        <div className="flexdiv">
          <Avatar />
          <p>Admin</p>
        </div>
        <div className="flexdiv">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#a435f0",
  height: "2.8rem",
  borderRadius: "0px",
  fontSize: "1rem",
  width: "14rem",
  fontWeight: "700",
  textTransform: "none",
  color: "black",
  "&:hover": {
    backgroundColor: "#8710d8"
  }
}));
