import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Box, Button, Center, Container, Spinner, Text, VStack, HStack, LinkBox, LinkOverlay, Heading, Flex, Icon, Avatar, border, Image } from '@chakra-ui/react';
import { postsExamples } from '../components/PostsExample';
import { Post } from '../models/types';

// const tests:JSX.Element = postsExamples.map((post: Post, index) => {
//     console.log(post.email);    
//     return (
//         <Box>
//             <Text key={index} >post</Text>
//         </Box>
//     )
// })

const Home = (): JSX.Element => {
    return (
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <VStack>
                <Center px='18px'>
                    <Flex my='20px' fontFamily='Montserrat' >
                        <Text color='#333330' fontWeight='extrabold' fontSize='7xl' >Welcome to</Text>
                        <Text pl='12px' color='#fc5757' fontWeight='extrabold' fontSize='7xl' >GeniAlt</Text>
                    </Flex>
                </Center>
                <Box maxH={'600px'} p='70px' rounded='2xl' w='60%' border='2px' borderColor='grey' >
                    <Box maxH='400px' overflow={'auto'}  >
                        {
                            postsExamples.map((post: Post, index) => {
                                const bg = post.id_disp == true ? '#e0e0e0' : '';
                                console.log(bg);
                                return (
                                    <Box _hover={{
                                        cursor: 'pointer',
                                    }} py={'6px'}>
                                        <HStack _hover={{transitionDuration:'200ms',bg: '#d9F0FF'}} justifyContent='space-between' background={bg} p='18px' rounded='md' border='1px' w='100%' key={index}>
                                            <Text >{post.email}</Text>
                                            <Text >{post.price}$</Text>
                                        </HStack>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </VStack>
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

export default Home;
