import { useEffect, useState } from "react";
import PageTitle from "../../components/atoms/pageTitle";
import { BookingType } from "../../types";
import { Popconfirm, Table, message } from "antd";
import {
  cancelBooking,
  getUserBookings,
} from "../../api/bookingService"
import { getDateTimeFormat } from "../../helpers";

function UserBookingsPage() {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getUserBookings();
      // Access the 'bookings' key to get the array
      if (Array.isArray(response.bookings)) {
        setBookings(response.bookings);
      } else {
        console.error("Response does not contain bookings array:", response);
      }
  
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const onCancelBooking = async (booking: BookingType) => {
    try {
      setLoading(true);
      const payload = {
        eventId: booking.event._id,
        ticketTypeName: booking.ticketType,
        ticketsCount: booking.ticketsCount,
        bookingId: booking._id,
        paymentId: booking.paymentId,
      };

      await cancelBooking(payload);
      message.success("Booking cancelled successfully");
      getData();
    } catch (error: any) {
      message.error(error.response.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Event Name",
      dataIndex: ["event", "name"], // Accesses nested 'name' property within 'event'
      key: "eventName",
    },
    {
      title: "Event Date & Time",
      dataIndex: ["event", "date"], // Accesses 'date' property within 'event'
      key: "eventDateTime",
      render: (date: string, record: BookingType) => getDateTimeFormat(date, record.event.time),
    },
    {
      title: "Ticket Type",
      dataIndex: "ticketType",
      key: "ticketType",
    },
    {
      title: "Ticket Count",
      dataIndex: "ticketsCount",
      key: "ticketsCount",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => status.toUpperCase(),
    },
    {
      title: "Booked On",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => getDateTimeFormat(createdAt),
    },
    {
      title: "Action",
      key: "action",
      render: (record: BookingType) => {
        if (record.status === "booked") {
          return (
            <Popconfirm
              title="Are you sure you want to cancel this booking?"
              onConfirm={() => onCancelBooking(record)}
              okText="Yes"
              cancelText="No"
              placement='leftBottom'
            >
              <span className="text-gray-600 cursor-pointer text-sm underline">
                Cancel
              </span>
            </Popconfirm>
          );
        }
        return null;
      },
    },
  ];
  

  // const columns = [
  //   {
  //     title: "Event Name",
  //     dataIndex: "event",
  //     key: "event",
  //     render: (event: any) => event.name,
  //   },
  //   {
  //     title: "Event Date & Time",
  //     dataIndex: "event",
  //     key: "event",
  //     render: (event: any) => getDateTimeFormat(`${event.date} ${event.time}`),
  //   },
  //   {
  //     title: "Ticket Type",
  //     dataIndex: "ticketType",
  //     key: "ticketType",
  //   },
  //   {
  //     title: "Ticket Count",
  //     dataIndex: "ticketsCount",
  //     key: "ticketsCount",
  //   },
  //   {
  //     title: "Total Amount",
  //     dataIndex: "totalAmount",
  //     key: "totalAmount",
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //     render: (status: string) => status.toUpperCase(),
  //   },
  //   {
  //     title: "Booked On",
  //     dataIndex: "createdAt",
  //     key: "createdAt",
  //     render: (createdAt: string) => getDateTimeFormat(createdAt),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (record: BookingType) => {
  //       if (record.status === "booked") {
  //         return (
  //           <Popconfirm
  //             title="Are you sure you want to cancel this booking?"
  //             onConfirm={() => onCancelBooking(record)}
  //             okText="Yes"
  //             cancelText="No"
  //             placement='leftBottom'
  //           >
  //             <span className="text-gray-600 cursor-pointer text-sm underline">
  //               Cancel
  //             </span>
  //           </Popconfirm>
  //         );
  //       }
  //       return "";
  //     },
  //   },
  // ];

  return (
    <div>
      <PageTitle title="Bookings" />

      <Table
        dataSource={bookings}
        columns={columns}
        loading={loading}
        rowKey="_id"
        pagination={false}
      />
    </div>
  );
}

export default UserBookingsPage;
