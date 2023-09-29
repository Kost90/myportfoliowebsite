import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/assets/Logo.svg";
import { container_layout, nav_container, svg_size, overflow } from "./layout.module.css";
import Footer from "../Footer/Footer";

const Layout = ({children }) => {

  return (
    <div>
      <nav className={container_layout}>
        <Logo className={svg_size} />
        <ul>
          <div className={nav_container}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        </ul>
      </nav>
      <main className={overflow}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
