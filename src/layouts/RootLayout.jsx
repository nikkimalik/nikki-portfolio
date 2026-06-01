import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;