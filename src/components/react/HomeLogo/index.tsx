import { motion } from "framer-motion";
import styles from "./HomeLogo.module.css";
export const HomeLogo = () => {
  return (
    <div className={styles.imageContainer}>
      <motion.img
        whileHover={{
          scale: [1, 1.2],
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        src="/PEE_logo.png"
        alt="PEE logo"
      />
    </div>
  );
};
