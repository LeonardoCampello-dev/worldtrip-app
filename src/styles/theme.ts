import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08'
    },
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#47585B',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#DADADA',
      '50': '#EEEEF2'
    },
    white: '#F5F8FA'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        color: 'gray.400'
      }
    }
  }
})
