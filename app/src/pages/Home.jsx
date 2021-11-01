import {
  Box,
  Center,
  VStack,
  Grid,
  GridItem,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home({time, date}) {

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
              <Button colorScheme='blue' boxSize='15rem' boxShadow='md'>Scan</Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/data'>
              <Button boxSize='7rem' boxShadow='md'>Data</Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/map'>
              <Button boxSize='7rem' boxShadow='md'>Map</Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Link to='/sync'>
              <Button boxSize='7rem' boxShadow='md'>Sync</Button>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md'>Exit</Button>
          </GridItem>
        </Grid>
        <VStack pl={4} align='stretch' spacing={4}>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>1</Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>1</Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>1</Center>
          <Center boxSize='3rem' bgColor='gray.700' borderRadius='0.5rem' color='white'>1</Center>
        </VStack>
      </Center>
    </Box>
  )
}

export default Home;