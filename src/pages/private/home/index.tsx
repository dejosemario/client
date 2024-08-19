import { useState, useEffect } from "react";
import { Button, message, Modal } from "antd";
import Spinner from "../../../components/atoms/spinner";
import { getEvents } from "../../../api/eventService";
import { EventType } from "../../../types";
import EventCard from "../../../components/organisms/EventCard";
import Filters from "../../../components/molecules/Filters";
import UserRoleChange from "../../../components/organisms/UserRoleChange";
import { updateUserRole } from "../../../api/usersService";

export default function HomePage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filters, setFilters] = useState({
    searchText: "",
    date: "",
  });
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, role } = JSON.parse(localStorage.getItem("user") || "{}");



  const getData = async (filtersObj: any) => {
    try {
      setLoading(true);
      const response = await getEvents(filtersObj);
      setEvents(response.data);
    } catch (error) {
      message.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData({ searchText: "", date: "" });
  }, []);

  const handleSubmit = async (): Promise<boolean>  => {
    try {
      const response = await updateUserRole({ role: "creator" });
      console.log(response, " I am the responseeeee");
      setShowCreateEventModal(false);
      if (response) {
        message.success("Role updated successfully");
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.reload();
        return true; 
      } else {
        message.error("Failed to update role3333");
        return false;
      }
    } catch (error) {
      // Handle error
      console.error("Failed to update role:", error);
      message.error("Failed to update role");
      return false;
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="flex  items-center justify-between">
        <p className="text-gray-600 text-xl font-bold">Welcome, {name}!</p>
        {role === "eventee" && (
          <Button
            disabled={loading}
            htmlType="submit"
            onClick={() => setShowCreateEventModal(true)}
            className="warning-button"
          >
            CREATE EVENT
          </Button>
        )}
      </div>
      <Modal
        open={showCreateEventModal}
        onCancel={() => setShowCreateEventModal(false)}
        onOk={handleSubmit}
        centered
        width="100%"
        footer={true}
      >
      <UserRoleChange
          handleSubmit={handleSubmit}
        />
      </Modal>

      <Filters filters={filters} setFilters={setFilters} onFilter={getData} />

      <div className="flex flex-col gap-7 mt-7">
        {events.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}
