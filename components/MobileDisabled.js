import React from "react";
import styles from  "../styles/mobiledisabled.module.scss";

export default () => <div className={styles.mobileNotsupportedContainer}>

    <iframe className={styles.notSupportedIframe} src="https://lottiefiles.com/iframe/14306-empty-state-illustration"></iframe>
    <p className={styles.mobileNotsupportedText}>
        This device is not supported yet please open from a desktop browser
</p>
</div>