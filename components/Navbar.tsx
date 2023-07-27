"use client";

import Link from "next/link";
import Container from "./Container";
import { FaShippingFast } from "react-icons/fa";
import Navlink from "./Navlink";
import useTheme from "@/hooks/useTheme";
import { MdDarkMode, MdLight } from "react-icons/md";

const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/products",
    label: "Products",
  },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-5 border-b dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <FaShippingFast className="text-4xl text-primary" />
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-primary to-violet text-transparent"
          >
            Druto Deals
          </h1>
        </Link>
        <div className="flex gap-5 items-center">
          {navItems.map((navItem) => (
            <Navlink
              navbar
              activeClassName="text-primary"
              key={navItem.path}
              href={navItem.path}
            >
              {navItem.label}
            </Navlink>
          ))}
          <div className="text-4xl" onClick={toggleTheme}>
            {theme === "dark" ? <MdLight /> : <MdDarkMode />}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
