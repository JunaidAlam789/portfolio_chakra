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
export default function Home() {
  return (
    <div>
     
 
      <Portfolio/>
      <HStack>
      <ProjectCard/>
      <ProjectCard/>
      </HStack>
      <HStack>
      <ProjectCard/>
      <ProjectCard/>
      </HStack>
      <HStack>
      <ProjectCard/>
      <ProjectCard/>
      </HStack>

    </div>
  )
}
