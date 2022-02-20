import { Link, Box, Button, Center, Container, Spinner, Text, VStack } from '@chakra-ui/react';

const Post = (): JSX.Element => {
    console.log('a');
    return (
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <VStack>
                <Center padding='18px 0'>
                    <Text w='100%' color='#333330' fontWeight='extrabold' fontSize='9xl' bgColor='blue' >This is a post</Text>
                </Center>
            </VStack>
        </Box>
    );
};

export default Post;
