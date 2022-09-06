import Link from 'next/link'
import { useEffect } from "react";
import Router from "next/router";


export default function redirect() {
  useEffect(() => {
    window.location.assign('https://shop.mauzoun.com/')
  })
  return(
      <>
      </>
  )
}
