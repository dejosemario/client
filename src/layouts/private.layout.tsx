import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Spinner from "../components/atoms/spinner";

const PrivateLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Check if the user is authenticated by localStorage
  const isAuthenticated = () => {
    return !!localStorage.getItem("user");
  };

  useEffect(() => {
   
    const checkAuth = () => {
      if (isAuthenticated()) {
        setAuthenticated(true);
      } else {
        navigate("/login");
      }
      setLoading(false); 
    };
    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    authenticated && (
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


