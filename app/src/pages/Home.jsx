import { useRef, useState } from 'react'
import {
  Box,
  Center,
  VStack,
  Grid,
  GridItem,
  Button,
  Heading,
  Text,
  Icon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdOutlineTrackChanges, MdOutlineDns, MdOutlineMap, MdSync, MdOutlinePowerSettingsNew, MdGpsFixed, MdSignalWifi4Bar, MdBrightnessAuto, MdBatteryFull } from 'react-icons/md'
import axios from 'axios'

function Home({ time, date, link }) {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()

  return (
    <Box mx='7rem' pt='4rem'>
      <Box >
        <Heading>{time}</Heading>
        <Text pb='4' >{date}</Text>
      </Box>
      <Center>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Link to='/scan'>
              <Button colorScheme='blue' boxSize='15rem' boxShadow='md'>
                <Icon as={MdOutlineTrackChanges} boxSize={100} />
              </Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/data'>
              <Button boxSize='7rem' boxShadow='md'>
                <Icon as={MdOutlineDns} boxSize={50} />
              </Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/map'>
              <Button boxSize='7rem' boxShadow='md'>
                <Icon as={MdOutlineMap} boxSize={50} />
              </Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/sync'>
              <Button boxSize='7rem' boxShadow='md'>
                <Icon as={MdSync} boxSize={50} />
              </Button>
            </Link>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md' onClick={() => setIsOpen(true)}>
              <Icon as={MdOutlinePowerSettingsNew} boxSize={50} />
            </Button>
          </GridItem>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>
                  Shutdown Device
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure to shutdown the device?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                  <Button colorScheme='red' onClick={() => {
                    onClose()
                    axios.get(link + 'shutdown')
                  }} ml={3}>Shutdown</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Grid>

        <VStack pl={4} align='stretch' spacing={4}>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>
            <Icon as={MdGpsFixed} boxSize={25} />
          </Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>
            <Icon as={MdSignalWifi4Bar} boxSize={25} />
          </Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>
            <Icon as={MdBrightnessAuto} boxSize={25} />
          </Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>
            <Icon as={MdBatteryFull} boxSize={25} />
          </Center>
        </VStack>
      </Center>
    </Box>
  )
}

export default Home;