import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usersGlobalStore, { UsersStoreType } from "../store/users.store";
import { getCurrentUser } from "../api/usersService";
import Spinner from "../components/atoms/spinner";

const PublicLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = usersGlobalStore() as UsersStoreType;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();
        if (response.data) {
        setCurrentUser(response.data); 
          navigate("/"); 
        } else {
          setShowContent(true); 
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setShowContent(true); // Show public content if there's an error
      } finally {
        setLoading(false);
      }
    };

    if (!currentUser) {
      fetchUser(); // Fetch user data if not already authenticated
    } else {
      navigate("/"); // Redirect if user is already authenticated
    }
  }, [currentUser, navigate, setCurrentUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return showContent && <>{children}</> ;
};

export default PublicLayout;
