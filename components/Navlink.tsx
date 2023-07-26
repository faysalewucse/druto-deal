"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({
  children,
  href,
  activeClassName,
}: {
  children: React.ReactNode;
  href: any;
  activeClassName: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href.toString();

  console.log(pathName);

  return (
    <Link
      href={href}
      className={`${
        isActive && activeClassName
      } flex items-center gap-2 hover:bg-indigo-500 p-2 rounded-md transition-200`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
