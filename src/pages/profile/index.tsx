import usersGlobalStore, { UsersStoreType } from "../../store/users.store";
import PageTitle from "../../components/atoms/pageTitle";
import { getDateTimeFormat } from "../../helpers";
import { message } from "antd";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/usersService";
import Spinner from "../../components/atoms/spinner";

export default function ProfilePage() {
  const { currentUser, setCurrentUser }: UsersStoreType =
    usersGlobalStore() as UsersStoreType;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!currentUser) {
      const getUser = async () => {
        setLoading(true);
        try {
          const response = await getCurrentUser();
          if (response) {
            setCurrentUser(response);
            message.success("User fetched successfully");
          } else {
            message.error("Failed to fetch user");
          }
        } catch (error) {
          message.error("An error occurred while fetching the user");
        } finally {
          setLoading(false);
        }
      };
      getUser();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  const renderUserProperty = (label: string, value: any) => {
    return (
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">{label}</span>
        <span className="text-gray-800 font-semibold">{value}</span>
      </div>
    );
  };
  return (
    currentUser && (
      <div>
        <PageTitle title="Profile" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {renderUserProperty("User Id", currentUser?.data?.id)}
          {renderUserProperty("Name", currentUser?.data?.name)}
          {renderUserProperty("Email", currentUser?.data?.email)}
          {renderUserProperty(
            "Joined At",
            getDateTimeFormat(currentUser.createdAt!)
          )}
          {renderUserProperty(
            "Status",
            currentUser?.isActive ? "Active" : "Inactive"
          )}
          {renderUserProperty(
            "Role",
            currentUser?.data.role === "creator" ? "Creator" : "User"
          )}
        </div>
      </div>
    )
  );
}
