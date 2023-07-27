"use client";

import { Button } from "antd";
import { Table, Space } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";

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
        <Button icon={<EditOutlined />}>Edit</Button>
        <Button danger icon={<DeleteFilled />}>
          Delete
        </Button>
      </Space>
    ),
    key: "action",
  },
];

const page: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">CATEGORIES</h1>
      <Table size="small" dataSource={categories} columns={columns} />;
    </div>
  );
};

export default page;
