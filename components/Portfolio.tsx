"use client"
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  export default function ProjectPage() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}> Muhammad Junaid Alam</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          Hello, world! I am Full Stack Web Application Developer.
          I create responsive Web Apps using HTML, CSS, Chakra-UI, React, NodeJS and GraphQL.
          </Text>
        </Stack>
      </Box>
    );
  }