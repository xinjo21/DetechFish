/* import './App.css'; */
import {
  Box,
  Center,
  Flex,
  VStack,
  Grid,
  GridItem,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react';


function getTime() {
  const date = new Date()
  var hr = date.getHours()
  var mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  var sec = date.getSeconds()

  var currentDay = date.getDay()
  var currentMonth = date.getMonth()
  var currentDate = date.getDate()
  var currentYear = date.getFullYear()

  var month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  var time = "--:-- AM"

  if (hr > 12) {
    hr -= 12
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " PM"
  } else if (hr === 0) {
    hr = 12
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " AM"
  }

  var curDate = day[currentDay] + ", " + month[currentMonth] + " " + currentDate + ", " + currentYear

  document.querySelector('#time').innerText = time
  document.querySelector('#date').innerText = curDate
}

function App() {

  useEffect(() => {
    setInterval(getTime, 1000)
  }, [])

  return (
    <Box mx='7rem' pt='4rem'>
      <Box>
        <Heading id='time'>00:00AM</Heading>
        <Text pb='4' id='date'>Day, Month Day, Year</Text>
      </Box>
      <Center>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Button colorScheme='blue' boxSize='15rem' boxShadow='md'>1</Button>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md'>2</Button>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md'>3</Button>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md'>4</Button>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button boxSize='7rem' boxShadow='md'>5</Button>
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
  );
}

export default App;

/* <Center>
        <Button colorScheme='blue' boxSize='3xs'>
          <h1>SCAN</h1>
        </Button>
        <Flex>
          <Box>
            <Button>1</Button>
            <Button>2</Button>
          </Box>
          <Box>
            <Button>3</Button>
            <Button>4</Button>
          </Box>
        </Flex>



      </Center> */