"use client"
//import './globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from '../components/NavBar'
import Footer from "components/Footer"
import ProjectCard from "components/ProjectCard"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        
      <ChakraProvider>
          <NavBar/>
          </ChakraProvider>
          <ChakraProvider>
          {children}
          </ChakraProvider>
          <ChakraProvider>  
          <Footer/>
          </ChakraProvider>

        
        </body>
    </html>
  )
}
