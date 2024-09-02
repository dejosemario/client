import { useEffect, useState } from "react";
import { UserType } from "../../types";
import { Table, message } from "antd";
import { getAllAttendees } from "../../api/usersService";
import { getDateTimeFormat } from "../../helpers";
import PageTitle from "../../components/atoms/pageTitle";

function Attendees() {
  const [attendees, setAttendees] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getAllAttendees();
      setAttendees(response.data);
    } catch (error: any) {
      message.error(error.response.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns: any = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Joined At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => getDateTimeFormat(createdAt),
    },
    {
      title: "Event Name",
      dataIndex: "eventName",
      key: "eventName",
    },
  ];

  return (
    <div>
      <PageTitle title="Users" />
      <Table
        dataSource={attendees}
        columns={columns}
        loading={loading}
        rowKey="_id"
      />
    </div>
  );
}

export default Attendees;
