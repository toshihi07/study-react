import Image from "next/image";
import styles from "../styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>Hello {props.title}</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}