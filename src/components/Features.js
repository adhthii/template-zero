
import { Box } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'


import { Heading } from '@chakra-ui/react'

import { Divider } from '@chakra-ui/react'

import { Center } from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



function Features(){
    return (
        <div id="impacts">

            <Box m={[10,10]} boxShadow='dark-lg' rounded='md' bg='#897153' width="90%" height="250px" p='10'>
            <Center>
            <Heading fontSize='6xl'> Impacts </Heading>
            </Center>
                <Center> 
                   
                 <Tabs  variant='enclosed' colorScheme="whiteAlpha">
                    <TabList>
                        <Tab><Heading fontSize='4xl'> Africa</Heading></Tab>
                        <Tab><Heading fontSize='4xl'> Asia </Heading></Tab>
                        <Tab><Heading fontSize='4xl'> South America </Heading></Tab>
                    </TabList>

                <TabPanels>
                    <TabPanel>
                        <Center>  <p>We've helped numerous families across the African continent by providing food, education, and safety training. 
                            Our daily volunteering helps children earn an education, which is a fundamental right. We've impacted XXX kids and have reached XX% of our goal. 
                            </p></Center>
                   
                    </TabPanel>
                    <TabPanel>
                    <Center>  <p>We've helped numerous families across the African continent by providing food, education, and safety training. 
                            Our daily volunteering helps children earn an education, which is a fundamental right. We've impacted XXX kids and have reached XX% of our goal. 
                            </p></Center>
                    </TabPanel>
                    <TabPanel>
                    <Center>  <p>We've helped numerous families across the African continent by providing food, education, and safety training. 
                            Our daily volunteering helps children earn an education, which is a fundamental right. We've impacted XXX kids and have reached XX% of our goal. 
                            </p></Center>
                    </TabPanel>
                </TabPanels>
                </Tabs>

                </Center>

            </Box>
            

        </div>
    )
}

export default Features; 