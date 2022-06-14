
import { Box } from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'


import { Heading } from '@chakra-ui/react'

import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from "@chakra-ui/react";






function Search(){
    return (
        <div>

            <Flex>

            <Spacer/>

            
                <Editable defaultValue='Search Forest'>
                <EditablePreview />
                <EditableInput />
                </Editable>

            </Flex>


            

        </div>
    )
}

export default Search; 