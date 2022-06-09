import { Box, Heading, Text, Stack, Center, Button } from '@chakra-ui/react'
import Image from 'next/image'
import phonebooth from '../public/images/nfts/phonebooth.png'

const Mint = ({ tier, price, thumbnail }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
      <Box p="4">
        <Stack spacing={4} align="center">
          <Heading>Tier {tier}</Heading>
          <Text fontSize="md">{price} ETH</Text>
        </Stack>
        <Image src={phonebooth} alt={'mint'} />
        <Box>
          <Text fontSize="md">
            Utilities and Benefits: You get all this amazing stuff etc etc.
          </Text>
          <Button colorScheme="whatsapp" size="lg" width="100%">
            Mint
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Mint
