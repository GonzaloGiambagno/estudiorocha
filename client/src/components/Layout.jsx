import { Outlet } from "react-router-dom";
import BtnWsp from "./BtnWsp";
import Footer from "./Footer";
import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
      <BtnWsp />
    </>
  );
};

export default Layout;
