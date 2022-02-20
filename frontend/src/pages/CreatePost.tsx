import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Box, Button, Center, Container, Spinner, Text, VStack, HStack, LinkBox, LinkOverlay, Heading, Flex, Icon, Avatar, border, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Post } from '../models/types';

import { postCreatePost } from '../server/postRoutes';

const CreatePost = (): JSX.Element => {
    const [Price, setPrice] = useState('');

    const handleClick = () => {
        console.log(Price);
        const newPost: Post = {
            "email": "kaan@hhhepitech.eu",
            "price": parseInt(Price),
            "id_disp": true
        }
        postCreatePost(newPost);
    }

    return (
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <form>
                <VStack>
                    <Center px='18px'>
                        <Flex my='20px' fontFamily='Montserrat' >
                            <Text color='#333330' fontWeight='extrabold' fontSize='7xl' >Create a</Text>
                            <Text pl='24px' color='#fc5757' fontWeight='extrabold' fontSize='7xl' >Post</Text>
                        </Flex>
                    </Center>
                    <Box p='70px' rounded='2xl' minH='500px' w='60%' border='2px' borderColor='grey' >
                        <Heading pb='36px' >What services do you offer ?</Heading>
                        <Flex direction='row' justifyContent='space-between' >
                            <Flex justifyContent='center' alignItems='center' mr='24px' >
                                <Image h='4 0px' w='40px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/2048px-Dollar_Sign.svg.png' ></Image>
                            </Flex>
                            <Input onChange={e => setPrice(e.target.value)} placeholder='Daily rate' _hover={{
                                transitionDuration: '500ms',
                                borderColor: '#229ef1'
                            }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                        </Flex>
                        <Button onClick={handleClick} type='button' mt='100px' padding='15px 0' _hover={{
                                transitionDuration: 400,
                                color: '#cecece'
                            }} _active={{}} _focus={{}} w='100%' h='100%' color='white'
                                bg='#229ef1' boxShadow='linear(to-r, #4b66fa, #fa5074)'>Create post</Button>
                    </Box>
                </VStack>
            </form>
        </Box>
    );
};

// type People = {
//     name: string;
// };

// const [data, setData] = useState<People[]>([]);

// useEffect(() => {
//     getRegister()
//         .then((res) => {
//             setData(res);
//         })
//         .catch((error) => {
//             console.log(error)
//         });
// }, []);
// {
//     data.map((value, index) => (
//             <Box border='2px' borderColor='red' key={index}>
//                 <Text key={index} >{value.name}</Text>
//             </Box>
//         )
//     )
// }

export default CreatePost;
