import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import * as React from 'react'

function Faq(){

    return (

    <div id="#faqs">

    <Box  m={[4,10]} boxShadow='dark-lg' rounded='md' bg='#897153' width="90%" height="300px" p='7'>

        <Center> 
        <Heading fontSize="6xl"> Frequently Asked Questions </Heading>
        </Center>

            <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                Section 1 title
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                Section 2 title
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    </Box>

    </div>

)

}

export default Faq; 

