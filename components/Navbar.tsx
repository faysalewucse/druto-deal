import Link from "next/link";
import Container from "./Container";
import { FaShippingFast } from "react-icons/fa";

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

const Navbar = () => {
  return (
    <nav className="p-5 border-b">
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
        <div className="flex gap-5">
          {navItems.map((navItem) => (
            <Link key={navItem.path} href={navItem.path}>
              {navItem.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
