import { Link, Box, Button, Center, Container, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type People = {
    name: string;
};

const Root = (): JSX.Element => {
    return (
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <VStack>
                <Center padding='18px 0'>
                    <Text w='100%' color='#333330' fontWeight='extrabold' fontSize='9xl' >This is the root page</Text>
                </Center>
            </VStack>
        </Box>
    );
};

export default Root;
