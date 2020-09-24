import styles from "../styles/Second.module.css";
import Button from "../components/Button";
import Link from "next/link";

export default (Second) => {
  return (
    <div>
      <button>
        <Link href="/">
          <a>First page</a>
        </Link>
      </button>
      <h2 className={styles.mainTitle}>Second Page</h2>
      {/* <Button /> */}
    </div>
  );
};
