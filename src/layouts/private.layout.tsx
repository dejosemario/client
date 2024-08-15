import { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Spinner from "../components/atoms/spinner";
import usersGlobalStore, { UsersStoreType } from "../store/users.store";
import { getCurrentUser } from "../api/usersService";

const PrivateLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = usersGlobalStore() as UsersStoreType;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await getCurrentUser();
        setCurrentUser(response.data);
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    if (!currentUser) {
      getData();
    } else {
      setShowContent(true);
      setLoading(false);
    }
  }, [currentUser, navigate, setCurrentUser]);

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