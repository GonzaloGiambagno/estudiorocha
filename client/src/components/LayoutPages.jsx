import { Outlet } from "react-router-dom";
import BtnWsp from "./BtnWsp";
import Footer from "./Footer";
import Navbar2 from './Navbar/Navbar2';

const LayoutPages = () => {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-36">
      <body className="font-roboto antialiased bg-gray-50">
        <Navbar2 />

        <Outlet />

        <Footer />
        <BtnWsp />
      </body>
    </html>
  );
};

export default LayoutPages;
