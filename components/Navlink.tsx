"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: any;
  activeClassName: string;
  navbar?: boolean;
}
const Navlink: React.FC<NavLinkProps> = ({
  children,
  href,
  activeClassName,
  navbar,
}) => {
  const pathName = usePathname();
  const isActive = pathName === href.toString();

  return (
    <Link
      href={href}
      className={`${
        isActive && activeClassName
      } flex items-center gap-2 p-2 rounded-md transition-200 ${
        navbar ? "hover:text-primary" : "hover:bg-indigo-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
