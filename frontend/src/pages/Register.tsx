import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Box, Button, Center, Container, Spinner, Text, VStack, HStack, LinkBox, LinkOverlay, Heading, Flex, Icon, Avatar, border, Image } from '@chakra-ui/react';


const Register = (): JSX.Element => {
    return (
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <VStack>
                <Center px='18px'>
                    <Flex py='20px' fontFamily='Montserrat' >
                        <Text color='#333330' fontWeight='extrabold' fontSize='7xl' >Welcome to</Text>
                        <Text pl='12px' color='#fc5757' fontWeight='extrabold' fontSize='7xl' >GeniAlt</Text>
                    </Flex>
                </Center>
                <Box p='70px' rounded='2xl' minH='500px' w='60%' border='2px' borderColor='grey' >
                    <Heading pb='36px' >Who are you ?</Heading>
                    <LinkBox _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' w='100%' my='16px' rounded='md' border='2px' borderColor='grey' >
                        <Flex direction='row' justifyContent='space-between' >
                            <Flex>
                                <Box mr='24px' >
                                    <Image w='60px' src='https://cdn0.iconfinder.com/data/icons/human-networking-filled-outline/64/group-community-join-member-recruit-add-friend-512.png' ></Image>
                                </Box>
                                <Box>
                                    <Text fontSize='xl' fontWeight='extrabold' >Recruiter</Text>
                                    <Text >Hire a freelancer</Text>
                                </Box>
                            </Flex>
                            <Center right='0' >
                                <ChevronRightIcon />
                            </Center>
                        </Flex>
                        <LinkOverlay href='/register/recruiter' />
                    </LinkBox>
                    <LinkBox _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' w='100%' my='16px' rounded='md' border='2px' borderColor='grey' >
                        <Flex direction='row' justifyContent='space-between' >
                            <Flex>
                                <Box mr='24px' >
                                    <Image w='60px' src='https://cdn-icons-png.flaticon.com/512/2913/2913185.png' ></Image>
                                </Box>
                                <Box>
                                    <Text fontSize='xl' fontWeight='extrabold' >Freelance</Text>
                                    <Text >Create my profile</Text>
                                </Box>
                            </Flex>
                            <Center right='0' >
                                <ChevronRightIcon />
                            </Center>
                        </Flex>
                        <LinkOverlay href='/register/freelancer' />
                    </LinkBox>
                    <Text alignSelf='start' color='#cecece'>Already have an account ?
                        <Link href='/login' color='#229ef1'>Sign in</Link>
                    </Text>
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

export default Register;
