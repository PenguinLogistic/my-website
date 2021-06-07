import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import boot from '../styles/global.scss'
import Link from 'next/link'
import {GetStaticProps} from 'next'
import Homepage from '../containers/homepage'
import Button from '../components/button'

//Use Router
//index is used to link pages together mainly

export default function Home() {
  return (
      <Homepage/>
  )
}

// export const getStaticProps: GetStaticProps = async() =>{
//   const all PostsData=getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }