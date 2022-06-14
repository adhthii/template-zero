// 1. Import the extendTheme function


import Nav from './components/Nav';
import Section from './components/Section';
import Search from './components/Search'; 
import Features from './components/Features'; 
import Faq from './components/Faq'; 


import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'








function App() {
  return (

    <div>

      <Box bg="#658A70" width="100%" height="800px">

      <Flex>
       

        <Box m={[9,10]} boxShadow='dark-lg' rounded='md' bg='#897153' width="35%" height="50px">

          <Center>

          <Nav> </Nav>

          </Center> 

        </Box>

        <Spacer/>

        <Box m={[9,10]} boxShadow='dark-lg' rounded='md' bg='#897153' width="15%" height="50px">

        <Center p='2' >

          <Search> </Search>

        </Center> 

        </Box>


        

        

      </Flex>

      <Center> 

        <Heading fontSize='8xl' color='#423321'> Forest </Heading>

      </Center>

      <Center> 

        <Text> A Chakra UI Template</Text>

      </Center>

      <Spacer/>

    

      <Section> </Section>

      <Spacer/>

     

      

      <Features> </Features>

      

  

      <Flex>

     
      <Faq> </Faq>

      </Flex>

      

     </Box>

    

 
 
    </div>
  )
}

export default App; 