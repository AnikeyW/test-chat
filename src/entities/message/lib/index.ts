import { IMessage } from "@/entities/message/model/types";
import { MY_ID } from "@/shared/constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const isMyMessage = (message: IMessage) => {
  return message.user.id === MY_ID;
};

export const formatDate = (date: string) => {
  return dayjs(date)
    .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
    .format("h:mm A");
};
