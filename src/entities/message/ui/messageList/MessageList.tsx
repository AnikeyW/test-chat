import React, { useEffect, useRef } from "react";
import styles from "./MessageList.module.scss";
import { IMessage } from "@/entities/message/model/types";
import Message from "@/entities/message/ui/message/Message";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { motion } from "framer-motion";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  messages: IMessage[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <motion.div className={styles.root} layout transition={{ duration: 0.3 }}>
      <div className={styles.date}>{dayjs().format("M/D/YYYY")}</div>
      <div className={styles.messages}>
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
      <div ref={messagesEndRef} id={"messagesEndRef"} />
    </motion.div>
  );
};

export default MessageList;
