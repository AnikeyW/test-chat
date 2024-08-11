"use client";
import React from "react";
import styles from "./ChatWindow.module.scss";
import ChatHeader from "@/entities/chatHeader/ui/chatHeader/ChatHeader";
import MessageList from "@/entities/message/ui/messageList/MessageList";
import ChatInputBox from "@/features/sendMessage/ui/chatInputBox/ChatInputBox";
import useMessagesStore from "@/entities/message/model/useMessagesStore";

const ChatWindow = () => {
  const messages = useMessagesStore((state) => state.messages);

  return (
    <div className={styles.root}>
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInputBox />
    </div>
  );
};

export default ChatWindow;
