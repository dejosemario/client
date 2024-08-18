// import { useEffect, useState } from "react";
// import PageTitle from "../atoms/pageTitle";
// import { BookingType } from "../../types";
// import { Table, message } from "antd";
// import { getUserBookings } from  "../../api/bookingService"
// import { getDateTimeFormat } from "../../helpers";

// function CreatorBookingsPage() {
//   const [bookings, setBookings] = useState<BookingType[]>([]);
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const response = await getUserBookings();
//       console.log(response, "why are you blankkk"); // Check what the API is returning
//       setBookings(response);
//     } catch (error: any) {
//       message.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const columns = [
//     {
//       title: "Event",
//       dataIndex: "event",
//       key: "event",
//       render: (event: any) => event.name,
//     },
//     {
//       title: "User",
//       dataIndex: "user",
//       key: "user",
//       render: (event: any) => event.user,
//     },
//     {
//       title: "Event Date & Time",
//       dataIndex: "event",
//       key: "event",
//       render: (event: any) => getDateTimeFormat(`${event.date} ${event.time}`), 
//     },
//     {
//       title: "Ticket Type",
//       dataIndex: "ticketType",
//       key: "ticketType",
//     },
//     {
//       title: "Ticket Count",
//       dataIndex: "ticketsCount",
//       key: "ticketsCount",
//     },
//     {
//       title: "Total Amount",
//       dataIndex: "totalAmount",
//       key: "totalAmount",
//     },
//     {
//       title: "Booked On",
//       dataIndex: "createdAt",
//       key: "createdAt",
//       render: (createdAt: string) => getDateTimeFormat(createdAt),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => status.toUpperCase(),
//     },
//   ];

//   return (
//     <div>
//       <PageTitle title="Bookings" />

//       <Table
//         dataSource={bookings}
//         columns={columns}
//         loading={loading}
//         rowKey={(record) => record?._id || record?.id || 'fallback-key'}
//         pagination={false}
//       />
//     </div>
//   );
// }

// export default CreatorBookingsPage;
