import {
  Flex,
  Button,
  Icon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NavigationBtn({ firstBtn, scndBtn, thirdBtn, firstIcn, scndIcn, thirdIcn }) {

  return (
    <Flex flexDirection='column' h='100%' justifyContent='space-between' alignItems='center'>
      <Link to={firstBtn}>
        <Button boxSize='6rem'>
          <Icon as={firstIcn} boxSize={10} />
        </Button>
      </Link>
      <Link to={scndBtn}>
        <Button boxSize='6rem'>
          <Icon as={scndIcn} boxSize={10} />
        </Button>
      </Link>
      <Link to={thirdBtn}>
        <Button boxSize='6rem'>
          <Icon as={thirdIcn} boxSize={10} />
        </Button>
      </Link>
    </Flex>
  )

}

export default NavigationBtn