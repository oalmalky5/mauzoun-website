import { motion } from "framer-motion";
import styles from "../styles/menu.module.scss";
import Link from "next/link";

export const MotionLogo = () => {
    
    return (
        <>
          <Link href="/">
            <motion.img
            src="https://i.imgur.com/HjDbXtR.png"
            alt="Mauzoun logo"
            className={styles.motionLogo}
            transition={{ duration: 0.5 }}
            layoutId="logo"
            />
          </Link>
        </>
    );
}