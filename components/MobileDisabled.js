import React from "react";
import styles from  "../styles/mobiledisabled.module.scss";

const MobileDisabled=() => <div className={styles.mobileNotsupportedContainer}>
    <iframe className={styles.notSupportedIframe} src="https://lottiefiles.com/iframe/14306-empty-state-illustration"></iframe>
    <p className={styles.mobileNotsupportedTextAr}>
    لا يزال موقعنا في مرحلته التجريبية، ولذلك فهو لا يدعم التصفح عبر الهاتف المحمول. يرجى استخدام متصفح حاسوبكم للاطلاع على الموقع بأفضل شكل.

    </p>
    <p className={styles.mobileNotsupportedTextEn}>
    Our website is currently still in its beta version, and therefore does not support mobile view. For the best experience, please view the website from a desktop browser.
    
    </p>

    
</div>

export default MobileDisabled