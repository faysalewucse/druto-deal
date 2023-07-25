import Link from "next/link";
import Container from "./Container";
import { FcShop } from "react-icons/fc";

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
        <FcShop className="text-4xl" />
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
