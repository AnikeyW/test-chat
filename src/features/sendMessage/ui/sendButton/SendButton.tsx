import React, { FC } from "react";
import styles from "./SendButton.module.scss";
import { SendOutlined } from "@ant-design/icons";

interface Props {
  isInputMessageEmpty: boolean;
  onClick: () => void;
}

const SendButton: FC<Props> = ({ isInputMessageEmpty, onClick }) => {
  return (
    <button
      className={styles.sendButton}
      style={{ color: isInputMessageEmpty ? "#8e8e93" : "#007aff" }}
      onClick={onClick}
      disabled={isInputMessageEmpty}
    >
      <SendOutlined />
    </button>
  );
};

export default SendButton;
