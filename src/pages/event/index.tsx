import { Button, Table, message } from "antd";
import { useState } from "react";
import PageTitle from "../../components/molecules/PageTitle";
import { useNavigate } from "react-router-dom";
import { Pen, Trash2 } from "lucide-react";
import { getDateTimeFormat } from "../../helpers";



export default function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);




  const deleteEventHandler =async (id: string) => {
    message.success("Event deleted successfully");
  }
  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (date: any, row: any) => {
        return getDateTimeFormat(`${date} ${row.time}`);
      },
      key: "date",
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
            onClick={() => navigate(`/admin/events/edit/${record._id}`)}
          />
        </div>
      ),
    },
  ]
  return (
    <div>
       <div className="flex justify-between items-center">
        <PageTitle title="Events" />
        <Button type="primary" onClick={() => navigate("/creator/events/create")}>
          Create Event
        </Button>
      </div>
      <Table dataSource={events} columns={columns} loading={loading} />
    </div>
  );
}
