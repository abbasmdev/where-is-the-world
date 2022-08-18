import { Header } from "components";
import React, { FC } from "react";

const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
