import { Center, Image } from '@chakra-ui/react'

export function Logo(): JSX.Element {
  return (
    <Center>
      <Image
        src='/images/logo.svg'
        alt='Logo'
        fallbackSrc='https://via.placeholder.com/150'
        htmlWidth='186px'
        marginY={6}
      />
    </Center>
  )
}
