import React from "react";
import styles from "./ChatHeader.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import Image from "next/image";

const ChatHeader = () => {
  const usersIcons = [
    {
      id: 1,
      iconPath:
        "https://s3-alpha-sig.figma.com/img/10e8/ca44/0d13be8eb41c740c86723de252569da9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpWboDh850r-BtCzCmO-kn4x7nMXRaLKh1P3-gdR0aRErPfEcHtPoPlDTHD3K0u5hmoq65ru~5aQ8AFY0buGxCJwbwLqMVd9MP0q57HaDbbbqEZ5sOh0BOKfjUa9yGmwdSvlCGmo6zJjKgFP5L6-77~YJe4Pi4yEQZOee1IEbEquu6C5nj5j3whIt2ScQ0q74iQxkFuA1xp-2CoprivU8gJBslLgEvg9riau0fiVeswJ1v1nsQWbc7z0X~gYpAO6LYwk0EsPS9z2bvTrKGu8D5IWAvDKXsQLhMDp1goGZgL8dTK7HlCUaNOW2NsYH4bM5gZcMOV912Rjqa7HlZGrnA__",
      alt: "user1",
    },
    {
      id: 2,
      iconPath:
        "https://s3-alpha-sig.figma.com/img/dbaa/16a5/0e7db451d868b67382bd8b61d8ac3da1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cD3BIsLymoUq4AAsn9pgQF61ttGaHkhwYh8tkEDCo1E5fSDOYjRxxWVH64v99yVZdjXGtSzPDcr92pzI9MOea7bqZRhhbBwX7FlXNtVmx3Yrdbk7qO-7AD8QOGllGcuuOHsHxmxH2y7h0EiiTjtl~zaSegpuMkr1wZb3nd-3Wq~GHywUM0AkPItDynkhm7JLVKgO4uC1ULemR1~z~0g1oK1KYMscwZHNDlE-9wW-22WkuNU8RmAd9LFTFUGBStOb9i7uGgnxLADMecC4RS-CfbtSZjb5DCWyheUboIU4UctJLsmI8oEHZVntn8TRbCyBNVVpiBq95eK4DPaOifZrLw__",
      alt: "user2",
    },
    {
      id: 3,
      iconPath:
        "https://s3-alpha-sig.figma.com/img/1c10/3a1a/cc0b9825064a996efd2dc58920faabd3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDiDLzQeozx8xVqAacDPpFgHKkHPWJaBgMUmHpbN7z~uIwQjTKfD1jEJJc7GjWhQ8xTlG3fT9hEH3-Eef5fe8WVtOQqw7nmOhLOBypJUEKPSURVjxQE6oT6oWY0Rq3a1H0WA9LlHukgYwawqOa9E-71WfSq94o9weTPwjDcj4S6kY5~HTfLJfZMzDvPrC-DK7dIHFSjwDOGwkiC5UkhQLXgY7YHWxt-AS80udqXlQibxIUSAPfefWIb9KDn3FP9MCPQ69UyPsNkxDTpHZifjp0DJtbG7iAL2ekZleHvbdkerlgojwmdk~zNWAGxNMfDi5uC7USU~sXz3MM8K~stgxg__",
      alt: "user3",
    },
    {
      id: 4,
      iconPath:
        "https://s3-alpha-sig.figma.com/img/c05d/1b14/f3a120be540c5f09aa4efa717c427906?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9ann0jIcpiYlLHAIZgXVTA2EUAjnayJFU~6~jMfal7-ymQgKcsbBlZgr6PMiTleqIevc6T73D~AIwK9~7DVY5tINgu596rucH8KbAWpAOGSbcfEQgKXPFqAzQVTwtBRBmIa5ca1XF0XLazu0trJIpXEAcj1~P8dX9h7YeMUoBtwE9K6a1lGcn-gXxSK1MqIa2m1UbRKo1KLtmNWSd2gVc2MtROWn2Hr-imOzfViZsMbRu99KdYpkp57PWZ6-ZjNn3cVwJwHoACm0hMOOKqmf9hfIMOJNnNgt7Z3kBoAnWtqn-BzsQzvVYIEkn8tyJ8lmp7xKZnxbfMoD3Rcy-meeQ__",
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
