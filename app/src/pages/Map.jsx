import {
  Box,
  Spacer,
  Text,
  Center,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'


import NavigationBtn from '../components/navigationBtns';
import { MdOutlineArrowBack, MdOutlineBlurCircular, MdOutlineTrackChanges } from 'react-icons/md'


function Map({time}) {
  const [stream, setStream] = useState(true)
  
  return (
    <Box>
      <Center h='100vh' p='0.75rem'>
        <NavigationBtn
          firstBtn={'/'}
          scndBtn={'/'}
          thirdBtn={'/scan'}

          firstIcn={MdOutlineArrowBack}
          scndIcn={MdOutlineBlurCircular}
          thirdIcn={MdOutlineTrackChanges}
        />
        <Spacer />
      </Center>
      <Text pos='absolute' right='0.75rem' top='0.75rem' bgColor='gray.50' borderRadius='full' px='1rem' py='0.25rem' fontSize='md'>
        7°05'14.4"N 121°32'25.9"E
      </Text>
      <Text pos='absolute' right='0.75rem' bottom='0.75rem' bgColor='gray.50' borderRadius='full' px='1rem' py='0.25rem' fontSize='md'>
        {time} | TEMP | DENSITY
      </Text>
      <Box pos='absolute' top='0' left='0' zIndex='-1'>
        {stream ?
          <Center bgColor='gray.800' h='100vh' w='100vw'>
            <Spinner size='lg' emptyColor='gray.500' />
          </Center>
          :
          <Box bgColor='gray.800' h='100vh' w='100vw'></Box>}
      </Box>
    </Box>
  )
}

export default Map;