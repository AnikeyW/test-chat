import styles from "./page.module.scss";
import ChatWindow from "@/widgets/chatWindow/ui/chatWindow/ChatWindow";

export default function Home() {
  return (
    <main className={styles.root}>
      <ChatWindow />
    </main>
  );
}
