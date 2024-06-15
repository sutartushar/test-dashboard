import Logo from "../Logo";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="text-container">
          <div>
            <a href="#">Dashboard</a>
          </div>
          <div>
            <a href="#">FAQS</a>
          </div>
          <div>
            <a href="#">Support</a>
          </div>
          <div className="profile">
            <PermIdentityOutlinedIcon style={{color:"#4A4ED4"}}/>
            <KeyboardArrowDownOutlinedIcon style={{color:"#4A4ED4"}}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
