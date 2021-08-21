import type { NextPage } from 'next'

import { Box, Text, Divider, Center, Flex } from '@chakra-ui/react'

import { Logo, Banner, AttractionTypes } from '../components/'
import { attractionsTypes } from '../utils/attractions-types'

const Home: NextPage = () => {
  return (
    <Box>
      <Logo />

      <Banner />

      <Flex
        width='90%'
        marginX='auto'
        alignItems='center'
        justifyContent='space-around'
      >
        {attractionsTypes.map(({ title, icon }) => {
          return (
            <AttractionTypes key={title} title={title} icon={icon} />
          )
        })}
      </Flex>

      <Center>
        <Divider
          marginY={16}
          orientation='horizontal'
          width='90px'
          border={1}
          borderColor='black'
        />
      </Center>

      <Center display='flex' flexDirection='column'>
        <Box>
          <Text fontSize='3xl'>Vamos nessa?</Text>
        </Box>

        <Box>
          <Text fontSize='3xl'>Então escolha seu continente</Text>
        </Box>
      </Center>
    </Box>
  )
}

export default Home
