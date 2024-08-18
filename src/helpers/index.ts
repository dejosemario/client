import dayjs from "dayjs";


export const getDateFormat = (date: string) => {
    if(!date) return "";
    return dayjs(date).format("DD MMM YYYY");
}


export const getDateTimeFormat = (date: string, time: string | null = null) => {
    // Default date to today if no date is provided
    const defaultDate = dayjs().format('YYYY-MM-DD');
  
    // Combine the default date with the provided time
    const dateTimeString = time ? `${defaultDate} ${time}` : date;
  
    // Format the combined date-time string
    return dayjs(dateTimeString).format('DD MMM YYYY hh:mm A');
  }

export const getTimeFormat = (time: string) => {
    return dayjs(time).format("hh:mm A");
}


export const formatUserName = (name: string): string => {
    // Split the name by spaces to handle multiple parts
    const nameParts = name.trim().split(/\s+/);
  
    // Capitalize the first letter of each part
    const capitalizedParts = nameParts.map(part => 
      part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
  
    // Join the parts back together
    return capitalizedParts.join(' ');
  };