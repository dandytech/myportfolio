import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function PageLayout() {
  return (
    <div className="w-full h-[100vh] overflow-hidden ">
      <Header />
      <Outlet />
    </div>
  );
}
