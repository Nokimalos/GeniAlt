import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Image, Box, Button, Center, Container, Text, VStack, Input, Checkbox, HStack, LinkOverlay, Flex, LinkBox, Heading, Select } from '@chakra-ui/react';
import { postLogin } from '../server/postRoutes';
import { Freelancer } from '../models/types';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        const newLogin: Freelancer = {
            "email": email,
            "password": password,
            "competencies": [],
            "lastname": "",
            "firstname": ""
        }
        console.log(newLogin);
        postLogin(newLogin);
    }


    return (
        // <Center maxW='' w='100vw' h='100vh' bg='#fcfcf7'>
        //     <VStack>
        //         <Center padding='60px'>
        //             <VStack padding='60px' spacing='15px' borderRadius='20px' border='1px' borderColor='#2278f1'>
        //                 <Text mb='48px' w='100%' fontWeight='extrabold' fontSize='4xl' bgClip='text'
        //                 bgGradient='linear(to-r, #4b66fa, #fa5074)' >Register</Text>
        //                 <VStack pb='35px' spacing='15px' w='100%'>
        //                     <Input _hover={{
        //                         transitionDuration: 400,
        //                         background: 'gray.100'
        //                     }} color='#a5a5a5' placeholder='name@domain.com'></Input>
        //                     <Input _hover={{
        //                         transitionDuration: 400,
        //                         background: 'gray.100'
        //                     }} color='#a5a5a5' placeholder='Password' type='password'></Input>
        //                     <Input _hover={{
        //                         transitionDuration: 400,
        //                         background: 'gray.100'
        //                     }} color='#a5a5a5' placeholder='Confirm password' type='password'></Input>
        //                 </VStack>
        //                 <Checkbox alignSelf='start' color='#cecece'>I agree to the terms and conditions.</Checkbox>
        //                 <Button padding='15px 0' _hover={{
        //                     transitionDuration: 400,
        //                     color: '#cecece'
        //                 }} _active={{}} _focus={{   }} w='100%' h='100%' color='white'
        //                 bg='#229ef1' boxShadow='linear(to-r, #4b66fa, #fa5074)'>Create my account</Button>
        //                 <Text alignSelf='start' color='#cecece'>Already have an account?
        //                     <Link href='/login' color='#229ef1'>Sign in</Link>
        //                 </Text>
        //             </VStack>
        //         </Center>
        //     </VStack>
        // </Center>
        <Box h='100vh' py='60px' bg='#fcfcf7' >
            <VStack>
                <Box p='70px' rounded='2xl' minH='500px' w='60%' border='2px' borderColor='grey' >
                    <Heading pb='36px' >Login</Heading>
                    <Input onChange={e => setEmail(e.target.value)} id='email' placeholder='name@domain.com' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Box my='24px' >
                        <Button my='12px' onClick={handleClick} padding='15px 0' _hover={{
                            transitionDuration: 400,
                            color: '#cecece'
                        }} _active={{}} _focus={{}} w='100%' h='100%' color='white'
                            bg='#229ef1' boxShadow='linear(to-r, #4b66fa, #fa5074)'>Log in</Button>
                        <Text alignSelf='start' color='#cecece'>Don't have an account yet ?
                            <Link href='/register' color='#229ef1'>Create my account</Link>
                        </Text>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default Login;
