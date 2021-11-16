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

function Data() {
  return (
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
          <Box bgColor='gray.100' borderRadius='full' w='98%' px='2rem' py={2} boxShadow='md'>
            <Heading size='md'>7°05'14.4"N 121°32'25.9"E</Heading>
            <Text size='sm'>9:14 PM | 29.4℃ | Medium Fish Density</Text>
          </Box>
        </VStack>
      </Center>

    </Box>
  )
}

export default Data;