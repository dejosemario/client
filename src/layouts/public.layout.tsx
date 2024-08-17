import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/atoms/spinner";

const PublicLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Check if the user is authenticated by localStorage
  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    if (!user || user === "undefined") {
      setShowContent(true);
    }
    return !!user;
  };

  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        navigate("/");
      } else {
        setShowContent(true); // Show public content if user is not authenticated

      }
      setLoading(false); // Set loading to false after checking authentication
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

  return showContent && <>{children}</>;
};

export default PublicLayout;
