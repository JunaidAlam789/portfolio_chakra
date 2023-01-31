"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from './page.module.css'
//import {ChevronDownIcon} from "@chakra-ui/icons"
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

import {Box} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Portfolio from 'components/Portfolio'

//import { Button } from '@chakra-ui/button'
export default function Home() {
  return (
    <div>
     
 
      <Portfolio/>


    </div>
  )
}
