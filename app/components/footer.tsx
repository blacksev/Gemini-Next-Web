import styles from "./footer.module.scss";

export default function Footer(props: { noLogo?: boolean }) {
  return (
    <div className={styles["footer-content"] + " no-dark"}>
      &copy; {new Date().getFullYear()}{" "}
      <a href="https://gemini.finai.fun">gemini.finai.fun</a> Powered by{" "}
      <a href="https://finai.fun">finai.fun</a> &{" "}
      <a href="https://emoji.6mzy.com">🧐</a>
    </div>
  );
}
