import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/assets/Logo.svg";
import { container_layout, nav_container, svg_size } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={container_layout}>
        <Logo className={svg_size} />
        <ul>
          <div className={nav_container}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
