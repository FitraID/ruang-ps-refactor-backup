import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";
import useGlobalStore from "../helper/store";
import Header from "../components/header";

export default function SidebarLayout() {
  const isVisible = useGlobalStore((state) => state.isNav);
  const toggleVisible = useGlobalStore((state) => state.toggleNav);
  const closeProfile = useGlobalStore((state) => state.falseProfile);

  return (
    <>
      <div className="root-bg w-screen h-full min-h-screen">
        {/* Navbar, Header etc */}
        <Sidebar />
        <div
          className={`transition-all  ${isVisible ? "lg:ps-80" : "ps-5 lg:ps-22"}`}
        >
          <Header />
          <div onClick={() => closeProfile()} className="flex">
            {/* Content */}
            <div className="grow py-5 pe-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
