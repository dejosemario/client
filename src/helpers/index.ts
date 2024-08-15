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
    console.log("Formatting time:", time); // Add this for debugging
    return dayjs(time).format("hh:mm A");
}
