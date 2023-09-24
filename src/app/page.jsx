import Banner from "@/components/home/banner/banner";
import Contact from "@/components/home/contact/contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Contact />
    </main>
  );
}
 