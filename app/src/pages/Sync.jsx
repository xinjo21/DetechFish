import {
  Box,
  Center,
  Spacer,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import NavigationBtn from '../components/navigationBtns';
import { MdOutlineArrowBack, MdOutlineMap } from 'react-icons/md'

function Sync () {
  return(
    <Box>
      <Center h='100vh' p='0.75rem'>
        <NavigationBtn
          firstBtn={'/'}
          scndBtn={'/'}
          thirdBtn={'/'}

          firstIcn={MdOutlineArrowBack}
          scndIcn={MdOutlineMap}
          thirdIcn={MdOutlineMap}
        />
        <Spacer />
        <VStack w='83vw' h='100vh' p={3} spacing={4}>
          <Box bgColor='gray.100' borderRadius='full' w='98%' px='2rem' py={2}>
            <Heading size='md'>WIFI NAME</Heading>
            <Text size='sm'>Connected</Text>
          </Box>
        </VStack>
      </Center>

    </Box>
  )
}

export default Sync;