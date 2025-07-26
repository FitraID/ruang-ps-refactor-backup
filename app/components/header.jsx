import useGlobalStore from "../helper/store";

export default function Header() {
  const isVisible = useGlobalStore((state) => state.isNav);
  const toggleVisible = useGlobalStore((state) => state.toggleNav);

  const isProfile = useGlobalStore((state) => state.isProfile);
  const toggleProfile = useGlobalStore((state) => state.toggleProfile);
  const closeProfile = useGlobalStore((state) => state.falseProfile);

  const navList = [
    {
      name: "User",
      route: "/user",
      icon: "user.png",
      isLogout: false,
    },
    {
      name: "Log Out",
      route: "/user",
      icon: "logout.png",
      isLogout: true,
    },
  ];
  return (
    <>
      <div
        className={`flex w-full py-5 pe-5 items-center ${isVisible ? "justify-end" : "justify-between"}`}
      >
        <div className={` ${isVisible ? "hidden" : ""}`}>
          <img
            onClick={() => toggleVisible()}
            src="/menu.png"
            className="w-10 h-auto cursor-pointer "
            alt=""
          />
        </div>
        <div className="relative z-30">
          <div className="cursor-pointer">
            <img
              onClick={() => toggleProfile()}
              onBlur={() => closeProfile()}
              src="/rp.png"
              className="w-10"
              alt=""
            />
          </div>
          <div
            className={`absolute right-0  top-14 ${isProfile ? "" : "hidden"}`}
          >
            <div className="black-bg py-2  px-5 w-64 shadow shadow-neutral-500">
              {navList.map((data, index) => (
                <div key={`header${index}`} className="cursor-pointer">
                  <div className="mb-3">
                    <div className="flex gap-3">
                      <img
                        src={`/${data.icon}`}
                        className="w-6 h-auto"
                        alt=""
                      />
                      <div
                        className={`grow ${data.isLogout ? "text-red-500" : ""}`}
                      >
                        {data.name}
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    {!data.isLogout && (
                      <div className="w-full h-[1px] bg-neutral-600"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-slate-800 h-[1px] w-full"></div>
      </div>
    </>
  );
}
