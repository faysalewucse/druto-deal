"use client";

import { Table, Space } from "antd";
import { MdDelete, MdEdit } from "react-icons/md";

const categories = [
  {
    key: 1,
    name: "Electronics",
    action: "Edit",
  },
  {
    key: 2,
    name: "Clothing",
  },
  {
    key: 3,
    name: "Home & Kitchen",
  },
  {
    key: 4,
    name: "Books",
  },
  {
    key: 5,
    name: "Beauty & Personal Care",
  },
  {
    key: 6,
    name: "Toys & Games",
  },
  {
    key: 7,
    name: "Sports & Outdoors",
  },
  {
    key: 8,
    name: "Health & Fitness",
  },
  // Add more categories as needed
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Action",
    render: () => (
      <Space size="middle">
        <h6 className="cursor-pointer text-primary hover:text-white border border-primary hover:bg-primary transition-200 rounded px-3 flex items-center gap-2">
          <MdEdit />
          Edit
        </h6>{" "}
        {/* Use the action property from the record */}
        <h6 className="cursor-pointer text-red-500 hover:text-white border border-red-600 hover:bg-red-600 transition-200 rounded px-3 flex items-center gap-2">
          <MdDelete />
          Delete
        </h6>
      </Space>
    ),
    key: "action",
  },
];

const page: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">CATEGORIES</h1>
      <Table size="small" dataSource={categories} columns={columns} />;
    </div>
  );
};

export default page;
