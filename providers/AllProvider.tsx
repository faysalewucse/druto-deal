"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./ThemeProvider";

const AllProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default AllProvider;
