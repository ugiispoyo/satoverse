"use client";
import React from "react";

import Layout from "@/components/Layout";

type Props = {
  children: React.ReactNode;
};

const App = (props: Props) => {
  const { children } = props;
  return <Layout>{children}</Layout>;
};

export default App;
