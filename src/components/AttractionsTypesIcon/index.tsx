import { Box, Image, Heading } from '@chakra-ui/react'

interface Props {
  title: string
  icon: string
}

export function AttractionTypes({ title, icon }: Props) {
  return (
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
        src={`/images/icons/${icon}.svg`}
        alt={title}
      />

      <Heading as='h3' fontSize='larger' fontWeight='semibold'>
        {title}
      </Heading>
    </Box>
  )
}
