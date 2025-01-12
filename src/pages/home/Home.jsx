import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <ul className={styles.homeUl + " d-flex gap-4 flex-wrap"}>
        <Link to={"/use-state"} className={styles.homeLink}>
          <li className={styles.homeli}>UseState Ex </li>
        </Link>
        <Link to={"/use-state"} className={styles.homeLink}>
          <li className={styles.homeli}>UseState Ex </li>
        </Link>
      </ul>
    </>
  );
}
