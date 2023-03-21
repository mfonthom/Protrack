import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
