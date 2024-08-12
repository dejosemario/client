import Cookies from "js-cookie";
import { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/usersService";
import Sidebar from "./sidebar";
import usersGlobalStore, { UsersStoreType } from "../store/users.store";
import { message } from "antd";
import Spinner from "../components/atoms/spinner";

const PrivateLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setCurrentUser, currentUser }: UsersStoreType =
    usersGlobalStore() as UsersStoreType;

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUser();
      setCurrentUser(response.data);
    } catch (e: any) {
      message.error(e.response.data.message || e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      console.log("babab don dey navigate");
      navigate("/login");
    } else {
      console.log("you are here!!", token, getData());
      getData();
      setShowContent(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    showContent &&
    currentUser && (
      <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar />
        <div className="flex-1 px-5 lg:mt-10 pb-10 overflow-y-scroll">
          {children}
        </div>
      </div>
    )
  );
};

export default PrivateLayout;
