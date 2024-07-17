import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <p className={styles.welcome}>
      Enjoy your day as you don't have pending todo task
    </p>
  );
};

export default WelcomeMessage;
