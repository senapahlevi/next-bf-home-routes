import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeAddress from './homeaddress'
import Header from './header'
import { useRef, useState } from 'react'
async function initMap() {

}
export default function Home() {
  return (

    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM0hoZiuTA5JVkJJeNNjjkd6wlD1JP5C0&libraries=places&callback=initMap"></script>
        
      </Head> */}
      <Header />
     <HomeAddress />
      </div>
  )
}
