/*  
 * @return {string} ("desktop","mobile","tablet").
*/
const  checkDevice = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return TABLET;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return MOBILE;
    }
    return DESKTOP;
  };

  export const MOBILE="mobile"
  export const DESKTOP="desktop"
  export const TABLET="tablet"
  export default checkDevice 