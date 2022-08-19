import { Header } from "components";
import React, { FC } from "react";

const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
