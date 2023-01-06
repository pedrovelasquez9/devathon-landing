import { motion } from "framer-motion";
import type {
  Devathon,
  DevathonData,
} from "../../../interfaces/DevathonData.type";
import styles from "./index.module.css";

export const DevathonInfo = ({ devathon }: Devathon) => {
  return devathon.map((item: DevathonData, index: number) => {
    return (
      <div className={styles.container} key={`data-${index}`}>
        <motion.div
          className={styles.timeline}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className={styles.innerTimelineContainer}>
            {(index + 1) % 2 !== 0 ? (
              <>
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                  <div key={`odd-${index}`}>
                    {item.info.split("\n").map((str, index) => (
                      <>
                        <p>{str}</p>
                        <br />
                      </>
                    ))}
                  </div>
                </div>
                <div className={styles.ilustration}>
                  <img src={item.img} alt={item.alt} />
                </div>
              </>
            ) : (
              <>
                <div className={styles.ilustration}>
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                  <div key={`even-${index}`}>
                    {item.info.split("\n").map((str, index) => (
                      <>
                        <p>{str}</p>
                        <br />
                      </>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  });
};
