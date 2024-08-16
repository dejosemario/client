export interface handleAuthProps {
    name: string;
    email: string;
    password: string;
  }


  export interface UserType {
    _id: string;
    name: string;
    email: string;
    role: 'creator' | 'eventee';
    isActive: boolean;
    createdAt: string;
    [key: string]: any;
  }
  
  export interface EventType {
    _id: string;
    name: string;
    description: string;
    organizer: string;
    guests: string[];
    address: string;
    city: string;
    state: string;
    date: string;
    time: string;
    media: string[];
    ticketTypes: {
      name: string;
      price: number;
      limit: number;
      available?: number;
      booked ?: number;
    }[];
  }
  
  export interface BookingType {
    _id: string;
    id?: string;
    user: UserType;
    event: EventType;
    ticketType: string;
    ticketsCount: number;
    quantity: number;
    totalAmount: number;
    paymentId ?: string;
    status ?: string;
    createdAt: string;
  }
  