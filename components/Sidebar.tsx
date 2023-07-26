import Link from "next/link";

import {
  MdDashboard,
  MdCategory,
  MdShoppingCart,
  MdPeople,
  MdStore,
  MdAssignment,
  MdReceipt,
} from "react-icons/md";
import Navlink from "./Navlink";

const sideBarItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/dashboard/categories",
    label: "Categories",
    icon: <MdCategory />,
  },
  {
    path: "/dashboard/products",
    label: "Products",
    icon: <MdShoppingCart />,
  },
  {
    path: "/dashboard/customers",
    label: "Customers",
    icon: <MdPeople />,
  },
  {
    path: "/dashboard/orders",
    label: "Orders",
    icon: <MdReceipt />,
  },
  {
    path: "/dashboard/inventory",
    label: "Inventory",
    icon: <MdStore />,
  },
  {
    path: "/dashboard/reports",
    label: "Reports",
    icon: <MdAssignment />,
  },
  // Add more dashboard items as needed
];

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gradient-to-br from-primary to-violet text-white rounded-l-xl p-5 my-5">
      <div className="flex flex-col gap-2 my-5 min-h-[70vh]">
        <h1 className="font-bold">Menu</h1>
        {sideBarItems.map((sideBarItem) => (
          <Navlink
            key={sideBarItem.path}
            href={sideBarItem.path}
            activeClassName="bg-gradient-to-b from-indigo-800 to-indigo-900"
          >
            <div className="text-xl">{sideBarItem.icon}</div>
            {sideBarItem.label}
          </Navlink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
