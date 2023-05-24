import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const MainLayout = () => {
  /* Router */
  /* State */

  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="font-inter antialiased bg-white text-gray-800 tracking-tight`}">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
