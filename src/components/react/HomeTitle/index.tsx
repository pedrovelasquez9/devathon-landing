import { motion } from "framer-motion";
import styles from "./HomeTitle.module.css";
export const HomeTitle = () => {
  const data = {
    name: "Programación en español",
    type: "Comunidad hispanohablante de desarrollo de software",
  };
  return (
    <div className={styles.titleContainer}>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles["main-title"]}
      >
        <span className={styles["blue-letter"]}>Programación</span>
        <br></br> en español
      </motion.h1>
    </div>
  );
};
