import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          A curated list of WASM functions as a demonstration of performance
          benefits of using WASM.
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Made with ❤️ by <a href="https://rulecms.com">RuleCMS</a>
        </p>
      </footer>
    </div>
  );
}
