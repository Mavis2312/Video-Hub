import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Suscribe to get More Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} p={'2'}>
            <Input
              placeholder="Enter Your E-Mail"
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p="0"
              color={'purple'}
              varient={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textAlign={'center'} textTransform={'uppercase'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Recived</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="href://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="href://intagram.com">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="href://github.com">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
