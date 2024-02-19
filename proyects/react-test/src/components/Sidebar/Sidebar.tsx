import NavItem from "./NavItem/NavItem";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import { NavItemProps } from "./NavItem/NavItemProps";

import { ReactElement } from "react";
import "./Sidebar.css";

const navItems: NavItemProps[] = [
  {
    title: "Home",
    icon: (<FaHome />) as ReactElement,
    route: "/",
  },
  {
    title: "About",
    icon: <FaInfoCircle />,
    route: "/about",
  },
];
/**
 * Componente que representa la barra lateral de la aplicación.
 *
 * @returns El componente de la barra lateral.
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="../../../public/vite.svg" alt="LOGO" />
        <h1>DonaTech</h1>
      </div>

      {navItems.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          icon={item.icon}
          route={item.route}
        />
      ))}
    </div>
  );
}

export default Sidebar;
