import { motion } from "framer-motion";
import type { FaqsList, Faqs } from "../../../interfaces/Faqs.type";
import styles from "./index.module.css";

export const FaqsComponent = ({ faqs }: FaqsList) => {
  return faqs.map((item: Faqs, index: number) => {
    return <div>{item.title}</div>;
  });
};
