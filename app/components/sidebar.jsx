import { useEffect } from "react";
import useGlobalStore from "../helper/store";
import { NavLink, useLocation } from "react-router";

export default function Sidebar() {
  const isVisible = useGlobalStore((state) => state.isNav);
  const toggleVisible = useGlobalStore((state) => state.toggleNav);
  const closeProfile = useGlobalStore((state) => state.falseProfile);

  const location = useLocation();

  const RouteList = [
    {
      icon: "eye.png",
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: "ps.png",
      name: "Playstation",
      route: "/playstation",
    },
    {
      icon: "wallet.png",
      name: "Financial",
      route: "/finance",
    },
    {
      icon: "item.png",
      name: "Item Management",
      route: "/item",
    },
    {
      icon: "users.png",
      name: "User Management",
      route: "/user-management",
    },
    {
      icon: "settings.png",
      name: "Setting",
      route: "/setting",
    },
  ];

  const currentRoute =
    RouteList.find((r) => location.pathname.startsWith(r.route))?.name ||
    "Rental Billing";

  useEffect(() => {
    document.title = currentRoute;
  }, [location.pathname]);

  return (
    <>
      <div
        onClick={() => closeProfile()}
        className={`z-50 fixed h-screen overflow-hidden bg-sidebar transition-all ${isVisible ? "w-screen lg:w-72" : "-translate-x-full lg:translate-x-0 lg:w-[85px]"}`}
      >
        <div className="px-3 py-5">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <img src="ps.png" className="w-14" alt="" />
              <h3
                className={`grow text-center font-semibold text-xl ${isVisible ? "" : "lg:hidden"}`}
              >
                Rental Billing
              </h3>
              <img
                onClick={() => toggleVisible()}
                src="close.png"
                className={`w-5 cursor-pointer ${isVisible ? "" : "lg:hidden"}`}
                alt=""
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex flex-col gap-3">
              {RouteList.map((data, index) => (
                <NavLink
                  key={`route${index}`}
                  to={data.route}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-5 py-4 m-0 hover:bg-sideitem-active transition-all",
                      isActive ? "bg-sideitem-active" : "",
                    ].join(" ")
                  }
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={data.icon}
                      className="min-w-5 w-5 h-full"
                      alt=""
                    />
                    <div className={` ${isVisible ? "" : "lg:hidden"}`}>
                      <div className="font-light">{data.name}</div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
