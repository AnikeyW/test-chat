import React, { useEffect, useState } from "react";
import styles from "./Message.module.scss";
import { ChatInputModes, IMessage } from "@/entities/message/model/types";
import { formatDate, isMyMessage } from "@/entities/message/lib";
import Image from "next/image";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import useMessagesStore from "@/entities/message/model/useMessagesStore";

interface Props {
  message: IMessage;
  isBeforeMessageSameAuthor: boolean;
}

const Message: React.FC<Props> = ({ message, isBeforeMessageSameAuthor }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const deleteMessage = useMessagesStore((state) => state.deleteMessage);
  const setEditingMessage = useMessagesStore(
    (state) => state.setEditingMessage,
  );
  const setChatInputMode = useMessagesStore((state) => state.setChatInputMode);
  const setInputValue = useMessagesStore((state) => state.setInputValue);

  useEffect(() => {
    if (!message.image || !FileReader || !(message.image instanceof File))
      return;

    const img = new FileReader();
    img.onload = () => {
      if (img.result && typeof img.result === "string") {
        setImgSrc(img.result);
      }
    };
    img.readAsDataURL(message.image);
  }, [message.image]);

  const editMessageHandler = (message: IMessage) => {
    setEditingMessage(message);
    setInputValue(message.text);
    setChatInputMode(ChatInputModes.EDIT);
  };

  return (
    <div
      style={{
        justifyContent: isMyMessage(message) ? "flex-end" : "flex-start",
        marginTop: isBeforeMessageSameAuthor ? "0.25rem" : "1rem",
      }}
      className={styles.root}
    >
      {isMyMessage(message) ? (
        <>
          <div className={styles.actionsButtons}>
            <DeleteOutlined onClick={() => deleteMessage(message.id)} />
            <EditOutlined onClick={() => editMessageHandler(message)} />
          </div>

          <div className={styles.myMessageBlock}>
            {!isBeforeMessageSameAuthor && (
              <div className={styles.myTriangle}></div>
            )}
            <div className={styles.text}>{message.text}</div>
            {imgSrc && (
              <div className={styles.image}>
                <Image
                  src={imgSrc}
                  alt={`message ${message.id}`}
                  fill={true}
                  sizes={"100px"}
                />
              </div>
            )}
            <div className={styles.info}>
              <div className={styles.date}>{formatDate(message.time)}</div>
              <div className={styles.deliveryCheck}>
                <CheckOutlined />
                <div className={styles.secondCheck}>
                  <CheckOutlined />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.userAvatarBox}>
            <div className={styles.userAvatar}>
              <Image
                src={message.user.avatar}
                alt={message.user.name}
                fill={true}
                sizes={"30px"}
              />
            </div>

            <div
              className={styles.userStatusIndicator}
              style={{
                backgroundColor:
                  message.user.status === "online" ? "#34C759" : "red",
              }}
            ></div>
          </div>
          <div className={styles.otherMessageBlock}>
            {!isBeforeMessageSameAuthor && (
              <div className={styles.otherTriangle}></div>
            )}
            <div className={styles.userInfo}>
              <span className={styles.userName}>{message.user.name}</span>
              <span className={styles.userPosition}>
                {message.user.position}
              </span>
            </div>
            <div className={styles.text}>{message.text}</div>
            <div className={styles.date}>{formatDate(message.time)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
