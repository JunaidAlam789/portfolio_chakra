"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from './page.module.css'
//import {ChevronDownIcon} from "@chakra-ui/icons"
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

import {Box, Stack,HStack} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Portfolio from 'components/Portfolio'
import ProjectCard from 'components/ProjectCard'
//import { Button } from '@chakra-ui/button'
          // flex={1}
          // flexDirection="row"
          // justifyContent="center"
          // alignItems="center"
          // p={1}
          // pt={2}

export default function Home() {
  return (
    <div>
     
 
      <Portfolio/>
      <HStack 
         
          
          justifyContent="center"
          
         >
      <ProjectCard/>
      <ProjectCard/>
      
      </HStack>
      <HStack 
         
          
          justifyContent="center"
          
         >
      <ProjectCard/>
      <ProjectCard/>
      
      </HStack>
      <HStack 
         
          
          justifyContent="center"
          
         >
      <ProjectCard/>
      <ProjectCard/>
      
      </HStack>
      

    </div>
  )
}
