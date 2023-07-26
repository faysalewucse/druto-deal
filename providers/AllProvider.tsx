"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";

const AllProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AllProvider;
