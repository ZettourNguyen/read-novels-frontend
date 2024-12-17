import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export const convertTo24Hour = (data: any) => {
    // const date = new Date(dateString);
    const date = (data instanceof Date) ? data : new Date(data);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${date.toLocaleDateString()}, ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const timeAgo = (date: Date | string | null | undefined): string => {
    if (!date) {
        console.log(typeof(date))
      return 'Invalid date'; // Hoặc thông báo mặc định
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return 'Invalid date'; // Hoặc thông báo mặc định
    }
    return formatDistanceToNow(parsedDate, { addSuffix: true , locale: vi});
  };