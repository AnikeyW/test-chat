import React from "react";
import styles from "./ChatHeader.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import Image from "next/image";

const ChatHeader = () => {
  const usersIcons = [
    {
      id: 1,
      iconPath: "/usericon1.jpg",
      alt: "user1",
    },
    {
      id: 2,
      iconPath: "/usericon2.jpg",
      alt: "user2",
    },
    {
      id: 3,
      iconPath: "/usericon3.jpg",
      alt: "user3",
    },
    {
      id: 4,
      iconPath: "/usericon4.jpg",
      alt: "user4",
    },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.usersIcons}>
        {usersIcons.map((userIcon) => (
          <div className={styles.userIcon} key={userIcon.id}>
            <Image
              src={userIcon.iconPath}
              alt={userIcon.alt}
              fill={true}
              sizes={"30px"}
            />
          </div>
        ))}
      </div>
      <div className={styles.chatInfo}>
        <div className={styles.name}>🦄 Team Unicorns</div>
        <div className={styles.lastTimeOnline}>last seen 45 minutes ago</div>
      </div>
      <button className={styles.optionsButton}>
        <EllipsisOutlined />
      </button>
    </div>
  );
};

export default ChatHeader;
