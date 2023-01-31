"use client"
import { ReactNode } from 'react';
import { Image } from '@chakra-ui/react';
import logo from "../images/KS2.png"
import tables from "../images/Table2.jpg"

import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = [{'name': 'Home', 'path':'/' },
               {'name': 'Projects', 'path':'/projects'},
               {'name': 'Contact','path':'/contact'},
              ];

const NavLink = ({ children}: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() { //withAction
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
           
          <HStack spacing={8} alignItems={'center'}>
            <Box>
            <Image src={logo.src} boxSize='50px'/>
            </Box>
            <HStack
              as={'nav'}
              
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link.name} href={link.path}>{link.name}</Link>
              ))}
            </HStack>
          </HStack>
          
          <Flex alignItems={'center'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
          
           
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.path}>{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      
      
    </>
  );
}
