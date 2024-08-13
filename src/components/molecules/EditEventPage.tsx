import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../atoms/spinner";
import {message } from "antd";
import PageTitle from "./PageTitle";
import EventForm from "../../components/organisms/EventForm";
import { getEventById } from "../../api/eventService";


function EditEventPage() {
  const [eventData, setEventData] = useState({});
  const [loading, setLoading] = useState(false);
  const params: any = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getEventById(params.id);
      setEventData(response.data);  
    } catch (error) {
      message.error("Failed to fetch event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <PageTitle title="Edit Event" />
      <div className="mt-5">
        {<EventForm initialData={eventData} type="edit" /> }
      </div>
    </div>
  );
}

export default EditEventPage;
