import * as React from "react";
import { Link } from "gatsby";
import {container_layout, nav_container} from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={container_layout}>
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
