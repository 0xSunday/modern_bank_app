import { logo, close, menu } from "../public/assets";
import { airbnb } from "../public/assets";
import { navLinks } from "../Data";
import logo2 from '../public/assets/index'
const NavBar = () => {
  return (
    <nav className="w-full flex py-0 justify-between items-center navbar">
      <img src={airbnb} alt="hoobank" />
      <img src={logo2} alt="logo" />
    </nav>
  );
};

export default NavBar;
