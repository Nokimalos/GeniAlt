import express from 'express';
import bodyparser from 'body-parser';
import cookieparser from 'cookie-parser';
import { env_port, env_host } from './serverConfig'
import { StatusCodes } from 'http-status-codes'
import { jwtRegisterFreelancer, jwtLoginFreelancer, jwtRegisterRecruiter, jwtLoginRecruiter } from './endpoints/jwt';
import { registerFreelancer, registerRecruiter, registerPost } from './endpoints/register';
import cors from 'cors';

const app = express();
const port = env_port;
const host = env_host;

app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(StatusCodes.OK);
})

app.get('/', (req, res) => {
    res.send('Hello World !');
})

app.get('/home', (req, res) =>{
    res.send('Je suis le home mon gars !');
})

app.post('/jwt/register/freelancer', jwtRegisterFreelancer);
app.post('/jwt/login/freelancer', jwtLoginFreelancer);
app.post('/jwt/register/recruiter', jwtLoginRecruiter);
app.post('/jwt/login/recruiter', jwtRegisterRecruiter);

app.post('/register/recruiter', registerRecruiter);
app.post('/register/freelancer', registerFreelancer);
app.post('/createPost', registerPost);

app.listen(port, () => {
    console.log(`Server listening on http://${host}:${port}/`)
})
