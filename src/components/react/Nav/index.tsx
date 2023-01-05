import { motion, useCycle } from "framer-motion";
import styles from "./Nav.module.css";
export const Nav = () => {
  const [isMenuOpen, toggleMenu] = useCycle(false, true);
  const links = [
    {
      name: "Inicio",
      href: "/",
    },
    { name: "Redes", href: "/redes" },
    { name: "Devathon", href: "/devathon" },
    { name: "Retos de programación", href: "/retos" },
  ];

  const variants = {
    open: (height = 10000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 40px 40px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <nav className={styles["nav-container"]}>
        <button onClick={() => toggleMenu()} className={styles.openMenuBtn}>
          <img src="/nav-logo.svg" alt="nav logo" />
        </button>
      </nav>
      <motion.div
        className={styles.navUlContainer}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
      >
        <motion.ul className={styles.navUl}>
          {links.map((link, index) => {
            return (
              <li key={index} className={styles["nav-link"]}>
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  );
};
