
import { Box } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'


import { Heading } from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'







function Nav(){
    return (
        <div>

            <Flex>

            <Spacer/>

            <Box as='button' borderRadius='md' bg='#92AB8F' color='white' px={4} h={8} m={2.5} variant="Link">
            <Heading fontSize="2xl" m="1"> <Link href='#' isExternal>
            Home 
            </Link></Heading>
            </Box>


            <Box as='button' borderRadius='md' bg='#92AB8F' color='white' px={4} h={8} m={2.5} src="https://www.google.com/">
            <Heading fontSize="2xl" m="1"> <Link href='#' isExternal>
            About 
            </Link></Heading>
            </Box>


            <Box as='button' borderRadius='md' bg='#92AB8F' color='white' px={4} h={8} m={2.5}>
            <Heading fontSize="2xl" m="1"><Heading fontSize="2xl" m="1"> <Link href='#impacts' isExternal>
            Impacts
            </Link></Heading> </Heading>
            </Box>


            <Box as='button' borderRadius='md' bg='#92AB8F' color='white' px={4} h={8} m={2.5}>
            <Heading fontSize="2xl" m="1"> <Heading fontSize="2xl" m="1"> <Link href='#faqs' isExternal>
            FAQs 
            </Link></Heading> </Heading>
            </Box>

            </Flex>


            

        </div>
    )
}

export default Nav; 