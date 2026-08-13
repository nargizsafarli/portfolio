import { FaGithub } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import logo from "./assets/sn logo add.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router";

function Nav() {
  return (
    <div className="flex items-center justify-between px-20 py-4 ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="size-10 rounded-full" />
        <RxDividerVertical className="size-6"/>
        <FaLinkedinIn className="size-6"/>
        <FaGithub className="size-6"/>
      </div>
      <div className="flex items-center gap-6">
        <NavLink to="/">Ana Səhifə</NavLink>
        <NavLink to="/about">Haqqımda</NavLink>
        <NavLink to="/edu">Təhsil</NavLink>
        <NavLink to="/skills">Bacarıqlar</NavLink>
        <NavLink to="/projects">Layihələr</NavLink>
      </div>
    </div>
  );
}

export default Nav;
