import type { NextPage } from 'next'

import {
  Box,
  Image,
  Container,
  Heading,
  Text,
  Divider,
  Center,
  Flex
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Box>
      <Center>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          fallbackSrc='https://via.placeholder.com/150'
          htmlWidth='186px'
          marginY={6}
        />
      </Center>

      <Flex
        width='100vw'
        height='300px'
        backgroundImage="url('/images/banner-background.svg')"
        backgroundPosition='center'
        backgroundSize='cover'
        marginX='auto'
        marginBottom={16}
        position='relative'
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
          width='80%'
          marginX='auto'
        >
          <Box textColor='white'>
            <Heading as='h2'>5 Continentes,</Heading>
            <Heading>infinitas possibilidades.</Heading>

            <Text marginTop={4}>
              Chegou a hora de tirar do papel a viagem que você sempre
              sonhou.
            </Text>
          </Box>

          <Box>
            <Image
              position='absolute'
              bottom='-32px'
              right={60}
              src='/images/icons/airplane.svg'
              alt='airplane'
            />
          </Box>
        </Flex>
      </Flex>

      <Flex
        width='90%'
        marginX='auto'
        alignItems='center'
        justifyContent='space-around'
      >
        <Box
          _hover={{ backgroundColor: 'gray.50', transition: '0.4s' }}
          padding={4}
          borderRadius={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            marginBottom={6}
            src='/images/icons/cocktail.svg'
            alt='cocktail'
          />

          <Heading as='h3' fontSize='larger' fontWeight='semibold'>
            vida noturna
          </Heading>
        </Box>

        <Box
          _hover={{ backgroundColor: 'gray.50', transition: '0.4s' }}
          padding={4}
          borderRadius={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            marginBottom={6}
            src='/images/icons/surf.svg'
            alt='surf'
          />

          <Heading as='h3' fontSize='larger' fontWeight='semibold'>
            praia
          </Heading>
        </Box>

        <Box
          _hover={{ backgroundColor: 'gray.50', transition: '0.4s' }}
          padding={4}
          borderRadius={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            marginBottom={6}
            src='/images/icons/building.svg'
            alt='building'
          />

          <Heading as='h3' fontSize='larger' fontWeight='semibold'>
            moderno
          </Heading>
        </Box>

        <Box
          _hover={{ backgroundColor: 'gray.50', transition: '0.4s' }}
          padding={4}
          borderRadius={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            marginBottom={6}
            src='/images/icons/museum.svg'
            alt='museum'
          />

          <Heading as='h3' fontSize='larger' fontWeight='semibold'>
            clássico
          </Heading>
        </Box>

        <Box
          _hover={{ backgroundColor: 'gray.50', transition: '0.4s' }}
          padding={4}
          borderRadius={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            marginBottom={6}
            src='/images/icons/earth.svg'
            alt='earth'
          />

          <Heading as='h3' fontSize='larger' fontWeight='semibold'>
            e mais...
          </Heading>
        </Box>
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
