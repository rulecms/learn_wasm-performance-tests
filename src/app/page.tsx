import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.description}>
          A curated list of WASM functions as a demonstration of performance
          benefits of using WASM.
        </div>
        <div className={styles.ctas}>
          <Link href="/fibonacci" className={styles.primary}>
            Fibonacci Sequence Demo
          </Link>
          <Link href="/prime" className={styles.primary}>
            Prime Number Checker Demo
          </Link>
          <Link href="/sort" className={styles.primary}>
            Array Sorting Demo
          </Link>
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
