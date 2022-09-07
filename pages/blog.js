import Link from 'next/link'
import { useEffect } from "react";
import { useRouter } from "next/router";




function Contact() {
  const router = useRouter()
  const { locale, pathname, asPath } = router;
  useEffect(() => {
    window.open("https://shop.mauzoun.com", "_blank")
    window.location.replace(`/story`)
  }, []);

  return (
    <></>
  );
}

export default Contact;
