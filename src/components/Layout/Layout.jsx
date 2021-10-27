import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLayout, setShowLayout] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/notfound") {
      setShowLayout(false);
    } else {
      setShowLayout(true);
    }
  }, [pathname]);

  const showSidebarHandler = () => {
    setShowSidebar(true);
  };
  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };

  return (
    <>
      {showLayout && <MainNavigation onShowSidebar={showSidebarHandler} />}
      <Sidebar onHideSidebar={hideSidebarHandler} showSidebar={showSidebar} />
      <main>{props.children}</main>
      {showLayout && <Footer />}
    </>
  );
};

export default Layout;
