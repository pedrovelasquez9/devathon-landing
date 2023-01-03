import { motion } from "framer-motion";
import type {
  Devathon,
  DevathonData,
} from "../../../interfaces/DevathonData.type";
import styles from "./index.module.css";

export const DevathonInfo = ({ devathon }: Devathon) => {
  return devathon.map((item: DevathonData, index: number) => {
    return (
      <div className={styles.container} key={index}>
        <motion.div
          className={styles.timeline}
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className={styles.innerTimelineContainer}>
            {(index + 1) % 2 !== 0 ? (
              <>
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                  <div>
                    {item.info.split("\n").map((str, index) => (
                      <>
                        <p key={index}>{str}</p>
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
                  <div>
                    {item.info.split("\n").map((str, index) => (
                      <>
                        <p key={index}>{str}</p>
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
