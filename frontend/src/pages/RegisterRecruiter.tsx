import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Image, Box, Button, Center, Container, Text, VStack, Input, Checkbox, HStack, LinkOverlay, Flex, LinkBox, Heading, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { Recruiter } from '../models/types';

const RegisterRecruiter = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [skill, setSkill] = useState('');

    const handleClick = () => {
        if (password != password2) {
            console.error("ahhhhhhhhhhhh");
            return;
        }
        const newRecruiter: Recruiter = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password,
            "competencies": [skill]
        }
        // postCreatePost(newPost);
        console.log(newRecruiter);
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
                    <Heading pb='36px' >Register</Heading>
                    <Input onChange={e => setFirstname(e.target.value)} placeholder='Firstname' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Input onChange={e => setLastname(e.target.value)} placeholder='Lastname' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Input onChange={e => setEmail(e.target.value)} placeholder='name@domain.com' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Input onChange={e => setPassword2(e.target.value)} type='password' placeholder='Confirm password' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} p='18px' maxW='100%' my='6px' rounded='md' border='2px' borderColor='grey'></Input>
                    <Select onChange={e => setSkill(e.target.value)} my='6px' rounded='md' border='2px' borderColor='grey' placeholder='Skills needed' _hover={{
                        transitionDuration: '500ms',
                        borderColor: '#229ef1'
                    }} >
                        <option value='Frontend Development'>Frontend Development</option>
                        <option value='Backend Development'>Backend Development</option>
                        <option value='DevOps'>DevOps</option>
                        <option value='Video Games Development'>Video Games Development</option>
                        <option value='UX Design'>UX Design</option>
                    </Select>
                    <Box my='24px' >
                        <Checkbox alignSelf='start' color='#cecece'>I agree to the terms and conditions.</Checkbox>
                        <Button my='12px' onClick={handleClick} padding='15px 0' _hover={{
                            transitionDuration: 400,
                            color: '#cecece'
                        }} _active={{}} _focus={{}} w='100%' h='100%' color='white'
                            bg='#229ef1' boxShadow='linear(to-r, #4b66fa, #fa5074)'>Create my account</Button>
                        <Text alignSelf='start' color='#cecece'>Already have an account?
                            <Link href='/login' color='#229ef1'>Sign in</Link>
                        </Text>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default RegisterRecruiter;
