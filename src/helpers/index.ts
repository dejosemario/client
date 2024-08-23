import dayjs from "dayjs";

export const getDateFormat = (date: string) => {
  if (!date) return "";
  return dayjs(date).format("DD MMM YYYY");
};


export const getDateTimeFormat = (date: string, time?: string) => {
  const parsedDate = dayjs(date);
  // If the time is provided, set the hour and minute
  if (time) {
    const [hours, minutes] = time.split(":").map(Number);
    const updatedDate = parsedDate.set('hour', hours).set('minute', minutes);
    return updatedDate.format("DD MMM YYYY hh:mm A");
  }

  return parsedDate.format("DD MMM YYYY hh:mm A");
};  

export const formatUserName = (name: string): string => {
  // Split the name by spaces to handle multiple parts
  const nameParts = name.trim().split(/\s+/);
  const capitalizedParts = nameParts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  );
  return capitalizedParts.join(" ");
};
