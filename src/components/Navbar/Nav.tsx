import { FaGithub } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import logo from "./assets/sn logo add.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router";
import { MdOutlineLightMode } from "react-icons/md";

const navItems = [
  { name: "Ana Səhifə", path: "/" },
  { name: "Haqqımda", path: "/about" },
  { name: "Təhsil", path: "/edu" },
  { name: "Bacarıqlar", path: "/skills" },
  { name: "Layihələr", path: "/projects" },
];

function Nav() {
  return (
    <div className="flex items-center justify-between px-20 py-5 backdrop-blur-md border-b border-yellow-300 text-white bg-[#2e2a07]">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="size-10 rounded-full" />
        <RxDividerVertical className="size-6"/>
        <FaLinkedinIn className="size-6"/>
        <FaGithub className="size-6"/>
      </div>
      {/* <div className="flex items-center gap-6">
        <NavLink to="/">Ana Səhifə</NavLink>
        <NavLink to="/about">Haqqımda</NavLink>
        <NavLink to="/edu">Təhsil</NavLink>
        <NavLink to="/skills">Bacarıqlar</NavLink>
        <NavLink to="/projects">Layihələr</NavLink>
      </div> */}
        <div className="flex items-center gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-200"
                  : "text-white hover:text-yellow-300 rounded-full "
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-3">
        az en
        <div>
          <MdOutlineLightMode className="size-7" />
        </div>
      </div>
    </div>
  );
}

export default Nav;

