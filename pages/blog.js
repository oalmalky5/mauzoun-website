import Link from 'next/link'
import { useEffect } from "react";
import Router from "next/router";



function Contact() {

  useEffect(() => {
    window.open("https://shop.mauzoun.com", "_blank")
  }, []);

  return (
    <></>
  );
}

export default Contact;
