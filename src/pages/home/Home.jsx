import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <ul className={styles.homeUl + " d-flex gap-4 flex-wrap"}>
        <Link to={"/use-state"} className={styles.homeLink}>
          <li className={styles.homeli}>UseState Ex </li>
        </Link>
        <Link to={"/use-ref-ex"} className={styles.homeLink}>
          <li className={styles.homeli}>UseRef Ex </li>
        </Link>
        <Link to={"/use-reducer-ex"} className={styles.homeLink}>
          <li className={styles.homeli}>UseReducer Ex </li>
        </Link>
        <Link to={"/custom-hook1"} className={styles.homeLink}>
          <li className={styles.homeli}>Custom Hook1 </li>
        </Link>
        <Link to={"/custom-hook2"} className={styles.homeLink}>
          <li className={styles.homeli}>Custom Hook2 </li>
        </Link>
      </ul>
    </>
  );
}
