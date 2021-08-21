import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react'

export function Banner() {
  return (
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
  )
}
