import React, { ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";
import styles from "./ChatInputBox.module.scss";
import {
  CloseCircleFilled,
  CloseOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import UploadButton from "@/features/sendMessage/ui/uploadButton/UploadButton";
import SendButton from "@/features/sendMessage/ui/sendButton/SendButton";
import { Input, InputRef } from "antd";
import useMessagesStore from "@/entities/message/model/useMessagesStore";
import { ChatInputModes, IMessage } from "@/entities/message/model/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { BOT_AVATAR_SRC, MY_ID } from "@/shared/constants";
import Image from "next/image";

dayjs.extend(utc);
dayjs.extend(timezone);

const ChatInputBox = () => {
  const inputRef = useRef<InputRef>(null);
  const sendMessage = useMessagesStore((state) => state.addMessage);
  const inputValue = useMessagesStore((state) => state.inputValue);
  const setInputValue = useMessagesStore((state) => state.setInputValue);
  const setChatInputMode = useMessagesStore((state) => state.setChatInputMode);
  const updateMessage = useMessagesStore((state) => state.updateMessage);
  const editingMessage = useMessagesStore((state) => state.editingMessage);
  const setEditingMessage = useMessagesStore(
    (state) => state.setEditingMessage,
  );
  const mode = useMessagesStore((state) => state.chatInputMode);
  const uploadedImage = useMessagesStore((state) => state.uploadedImage);
  const setUploadedImage = useMessagesStore((state) => state.setUploadedImage);
  const setUploadedImagePreviewSrc = useMessagesStore(
    (state) => state.setUploadedImagePreviewSrc,
  );
  const uploadedImagePreviewSrc = useMessagesStore(
    (state) => state.uploadedImagePreviewSrc,
  );

  useEffect(() => {
    if (mode === ChatInputModes.EDIT && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mode]);

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessageHandler = () => {
    if (inputValue === "" && !uploadedImage) return;

    if (mode === ChatInputModes.NEW) {
      const message: IMessage = {
        id: Math.random(),
        text: inputValue === "bot" ? "Hello, I'am bot" : inputValue,
        image: uploadedImage,
        time: dayjs().toISOString(),
        user: {
          id: inputValue === "bot" ? 1 : MY_ID,
          avatar: inputValue === "bot" ? BOT_AVATAR_SRC : "",
          name: "Janet",
          position: "Engineering",
          status: "online",
        },
      };

      sendMessage(message);
      setInputValue("");
      setUploadedImage(null);
      setUploadedImagePreviewSrc(null);
    }

    if (mode === ChatInputModes.EDIT) {
      if (editingMessage) {
        updateMessage(editingMessage.id, inputValue);
        setInputValue("");
        setUploadedImage(null);
        setUploadedImagePreviewSrc(null);
        setChatInputMode(ChatInputModes.NEW);
      }
    }
  };

  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessageHandler();
    }
  };

  const cancelEditHandler = () => {
    setInputValue("");
    setChatInputMode(ChatInputModes.NEW);
    setEditingMessage(null);
  };

  const removeUploadedImageHandler = () => {
    setUploadedImagePreviewSrc(null);
    setUploadedImage(null);
  };

  return (
    <div className={styles.root}>
      {mode === ChatInputModes.EDIT && (
        <div className={styles.editInfo}>
          <div className={styles.editMessageBlock}>
            <div className={styles.title}>Редактирование</div>
            <div className={styles.editMassege}>{editingMessage?.text}</div>
          </div>
          <button className={styles.cancelEdit} onClick={cancelEditHandler}>
            <CloseOutlined />
          </button>
        </div>
      )}

      {uploadedImagePreviewSrc && (
        <div className={styles.imagePreviewBox}>
          <div
            className={styles.removeImgBtn}
            onClick={removeUploadedImageHandler}
          >
            <CloseCircleFilled />
          </div>
          <div className={styles.imagePreview}>
            <Image
              src={uploadedImagePreviewSrc}
              alt={"uploaded image"}
              fill={true}
              sizes={"50px"}
            />
          </div>
        </div>
      )}

      <div className={styles.input}>
        <button className={styles.emojiButton}>
          <SmileOutlined />
        </button>

        <Input
          placeholder="Start typing..."
          variant="borderless"
          value={inputValue}
          onInput={changeInputHandler}
          onKeyPress={keyPressHandler}
          ref={inputRef}
        />
        <div className={styles.actionsButtons}>
          <UploadButton />
          <SendButton
            isInputMessageEmpty={inputValue === "" && !uploadedImage}
            onClick={sendMessageHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
