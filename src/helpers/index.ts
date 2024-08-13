import dayjs from "dayjs";


export const getDateFormat = (date: string) => {
    if(!date) return "";
    return dayjs(date).format("DD MMM YYYY");
}

export const getDateTimeFormat = (date: string) => {
    return dayjs(date).format("DD MMM YYYY hh:mm A");
}

export const getTimeFormat = (time: string) => {
    console.log("Formatting time:", time); // Add this for debugging
    return dayjs(time).format("hh:mm A");
}
