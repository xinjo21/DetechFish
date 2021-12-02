import {
  Box,
  Spacer,
  Text,
  Spinner,
  Center,
} from '@chakra-ui/react'
import { useState } from 'react'

import NavigationBtn from '../components/navigationBtns'
import { MdOutlineArrowBack, MdOutlineTrackChanges, MdOutlineMap } from 'react-icons/md'

function Scan({ time, temp }) {
  const [stream, setStream] = useState(true)

  return (
    <Box>
      <Center h='100vh' p='0.75rem'>
        <NavigationBtn
          firstBtn={'/'}
          scndBtn={'/scan'}
          thirdBtn={'/map'}

          firstIcn={MdOutlineArrowBack}
          scndIcn={MdOutlineTrackChanges}
          thirdIcn={MdOutlineMap}

        />
        <Spacer />
      </Center>

      <Text pos='absolute' right='0.75rem' top='0.75rem' bgColor='gray.50' borderRadius='full' px='1rem' py='0.25rem' fontSize='md'>
        7°05'14.4"N 121°32'25.9"E
      </Text>
      <Text pos='absolute' right='0.75rem' bottom='0.75rem' bgColor='gray.50' borderRadius='full' px='1rem' py='0.25rem' fontSize='md'>
        {time} | {temp} | DENSITY
      </Text>

      <Box pos='absolute' top='0' left='0' zIndex='-1'>
        <Box bgColor='gray.800' h='100vh' w='100vw'>
          <img src='http://192.168.254.109:2204/video_feed' alt='hello' /> {/* ADJUST VIDEO FRAME */}
        </Box>
      </Box>
    </Box>

  )
}

export default Scan;


/* {stream ?
  <Center bgColor='gray.800' h='100vh' w='100vw'>
    <Spinner size='lg' emptyColor='gray.500' />
  </Center>
  :
  <Box bgColor='gray.800' h='100vh' w='100vw'>
    <img src='http://192.168.254.109:2204/video_feed' alt='hello'/>
  </Box>
  } */