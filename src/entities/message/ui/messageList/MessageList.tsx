import React from "react";
import styles from "./MessageList.module.scss";
import { IMessage } from "@/entities/message/model/types";
import Message from "@/entities/message/ui/message/Message";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  messages: IMessage[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <div className={styles.root}>
      <div className={styles.date}>{dayjs().format("M/D/YYYY")}</div>
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          isBeforeMessageSameAuthor={
            message.user.id === messages[index - 1]?.user?.id
          }
        />
      ))}
    </div>
  );
};

export default MessageList;
