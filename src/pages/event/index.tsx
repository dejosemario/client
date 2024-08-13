import { Button, Table, message } from "antd";
import PageTitle from "../../components/atoms/pageTitle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteEvent, getEvents } from "../../api/eventService";
import { getDateFormat, getTimeFormat, getDateTimeFormat } from "../../helpers";
import { Pen, Trash2 } from "lucide-react";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const filters: {
        searchText?: string;
        startDate?: Date;
        endDate?: Date;
      } = {};

      // Optionally add parameters
      filters.searchText = "";
      filters.startDate = new Date();
      filters.endDate = new Date();

      const response = await getEvents(filters);
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      message.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const deleteEventHandler = async (id: string) => {
    try {
      setLoading(true);
      await deleteEvent(id);
      getData();
      message.success("Event deleted successfully");
    } catch (error) {
      message.error("Failed to delete event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (startDate: any) => {
        return getDateFormat(`${startDate}`);
      },
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (endDate: any) => {
        return getDateFormat(`${endDate}`);
      },
      key: "endDate",
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (time: any) => {
        return getTimeFormat(`${time}`);
      },
      key: "time",
    },
    {
      title: "Organizer",
      dataIndex: "organizer",
      key: "organizer",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: any) => getDateTimeFormat(date),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_text: any, record: any) => (
        <div className="flex gap-5">
          <Trash2
            className="cursor-pointer text-red-700"
            size={16}
            onClick={() => deleteEventHandler(record._id)}
          />
          <Pen
            className="cursor-pointer text-yellow-700"
            size={16}
            onClick={() => navigate(`/creator/events/edit/${record._id}`)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Events" />
        <Button
          type="primary"
          onClick={() => navigate("/creator/events/create")}
        >
          Create Event
        </Button>
      </div>

      <Table dataSource={events} columns={columns} loading={loading} />
    </div>
  );
}

export default EventsPage;
