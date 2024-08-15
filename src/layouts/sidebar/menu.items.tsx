import {
  BookCheck,
  CandlestickChart,
  Home,
  List,
  LogOut,
  User,
  UsersRound,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import usersGlobalStore, { UsersStoreType } from "../../store/users.store";

function MenuItems() {
  const iconSize = 16;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { currentUser }: UsersStoreType = usersGlobalStore() as UsersStoreType;

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={iconSize} />,
      isActive: currentPath === "/",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={iconSize} />,
      isActive: currentPath === "/profile",
    },
    {
      name: "Bookings",
      path: "/profile/bookings",
      icon: <List size={iconSize} />,
      isActive: currentPath === "/profile/bookings",
    },
    {
      name: "Reports",
      path: "/profile/reports",
      icon: <CandlestickChart size={iconSize} />,
      isActive: currentPath === "/profile/reports",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogOut size={iconSize} />,
    },
  ];
  const creatorMenu = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={iconSize} />,
      isActive: currentPath === "/",
    },
    {
      name: "Events",
      path: "/creator/events",
      icon: <List size={iconSize} />,
      isActive: currentPath.includes("/creator/events"),
    },
    {
      name: "Bookings",
      path: "/creator/bookings",
      icon: <BookCheck size={iconSize} />,
      isActive: currentPath.includes("/creator/bookings"),
    },
    {
      name: "Users",
      path: "/creator/users",
      icon: <UsersRound size={iconSize} />,
      isActive: currentPath.includes("/creator/users"),
    },
    {
      name: "Reports",
      path: "/creator/reports",
      icon: <CandlestickChart size={iconSize} />,
      isActive: currentPath.includes("/creator/reports"),
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogOut size={iconSize} />,
    },
  ];

  const menuToRender = currentUser?.role === "eventee" ? userMenu : creatorMenu;

  const onLogout = () => {
    // Cookies.remove("token", { path: '/' });
    // setCurrentUser(null); 
    localStorage.removeItem("user");
    navigate("/login");
    message.success("Logged out successfully");
  };

  return (
    <div className="lg:bg-gray-200 h-full p-5 w-full">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info">EVENTFUL</h1>
        <span className="text-sm text-gray-600">{currentUser?.name}</span>
      </div>

      <div className="flex flex-col gap-10 mt-20">
        {menuToRender.map((item: any) => (
          <div
            className={`cursor-pointer px-5 py-3 rounded flex gap-5 text-sm items-center ${
              item.isActive ? "bg-info text-white" : ""
            }`}
            key={item.name}
            onClick={() => {
              if (item.name === "Logout") {
                onLogout();
              } else {
                navigate(item.path);
              }
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
