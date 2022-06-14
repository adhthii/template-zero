import { Box } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'


import { Center } from '@chakra-ui/react'




function Section(){
    return (
        <div>

    

            <Box m={[4,10]} boxShadow='dark-lg' rounded='md' bg='#897153' width="90%" height="250px">

            <Center> 
            <Heading fontSize='6xl' p='4' m='2'> Our mission </Heading>
            </Center>

            <Center> 
           <Text p='4' > Our nonprofit's mission is to help change the public's perseption of the environment. 
           The general people have concern for the environment, but are not willing enough to take action. 
           That's where we come in. Forest's goal is to create a world and help raise awareness for nature. 
           We're doing so while limiting our footprint on the Earth. </Text>

            </Center>


           </Box>

        
          

            

            

        </div>
    )
}

export default Section; 