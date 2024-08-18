import { useState, useEffect } from "react";
import { message } from "antd";
import Spinner from "../../../components/atoms/spinner";
import { getEvents } from "../../../api/eventService";
import { EventType } from "../../../types";
import EventCard from "../../../components/organisms/EventCard";
import Filters from "../../../components/molecules/Filters";

export default function HomePage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filters, setFilters] = useState({
    searchText: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

const userName = JSON.parse(localStorage.getItem("user") || "{}").name;
  
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

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-600 text-xl font-bold">
        Welcome, {userName}!
      </p>

      <Filters filters={filters} setFilters={setFilters} onFilter={getData} />

      <div className="flex flex-col gap-7 mt-7">
        {events.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}
