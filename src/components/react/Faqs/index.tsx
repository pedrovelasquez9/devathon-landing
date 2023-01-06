import { motion } from "framer-motion";
import type { FaqsList, Faqs } from "../../../interfaces/Faqs.type";
import styles from "./index.module.css";

export const FaqsComponent = ({ faqs }: FaqsList) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={styles.gridContainer}
    >
      {faqs.map((item: Faqs, index: number) => {
        return (
          <div key={index} className={styles.questionTitle}>
            <h3>{item.title}</h3>
            <p>{item.answer}</p>
          </div>
        );
      })}
    </motion.div>
  );
};
