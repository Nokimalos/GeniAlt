import { Freelancer } from '../models/freelancer';
import { Recruiter } from '../models/recruiters';
import { Post } from '../models/post';
import { prisma } from '../index';
import { env_seed } from '../serverConfig';
import { StatusCodes } from 'http-status-codes';
import express from 'express';
import  bcrypt from 'bcrypt';
import { checkAll, checkLoginRecruiter, checkLoginFreelancer, checkPost, post, recruiter, freelancer } from './utils';
import { createFreelancer } from '../models/freelancer';
import { createRecruiter } from '../models/recruiters';
import { createPost } from '../models/post';

export const registerFreelancer = async (req: express.Request, res: express.Response) => {
    try {
        const seed = await bcrypt.genSalt(env_seed);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        let password = req.body.password;
        const competencies = req.body.competencies;

        password = await bcrypt.hash(req.body.password, seed);

        if (checkAll(firstname, lastname, email, password, competencies)) {
            if (!checkLoginFreelancer(req.body.email, req.body.password)) {
                const values: Freelancer = {
                    email: email,
                    password: password,
                    competencies: competencies,
                    firstname: firstname,
                    lastname: lastname
                };
                createFreelancer(values);
                freelancer.push(values);
                res.status(StatusCodes.OK).send('Status ok');
            }
            res.status(StatusCodes.BAD_REQUEST).send('Bad request');
        } else {
            res.status(StatusCodes.BAD_REQUEST).send('Bad request');
        }
    } catch (err) {
        console.error(err);
        res.status(StatusCodes.BAD_REQUEST).send('Bad request');
    }
}

export const registerRecruiter = async (req: express.Request, res: express.Response) => {
    try {
        const seed = await bcrypt.genSalt(env_seed);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        let password = req.body.password;
        const competencies = req.body.competencies;

        password = await bcrypt.hash(req.body.password, seed);

        if (checkAll(firstname, lastname, email, password, competencies)) {
            if (!checkLoginRecruiter(req.body.email, req.body.password)) {
                const values: Recruiter = {
                    email: email,
                    password: password,
                    competencies: competencies,
                    firstname: firstname,
                    lastname: lastname
                };
                createRecruiter(values);
                recruiter.push(values);
                res.status(StatusCodes.OK).send('Status ok');
            }
            res.status(StatusCodes.BAD_REQUEST).send('Bad request');
        } else {
            res.status(StatusCodes.BAD_REQUEST).send('Bad request');
        }
    } catch (err) {
        console.error(err);
        res.status(StatusCodes.BAD_REQUEST).send('Bad request');
    }
}

export const registerPost = async (req: express.Request, res: express.Response) => {
    try {
        const email = req.body.email;
        const price = req.body.price;
        const is_disp = req.body.is_disp;

        if (email && price && is_disp != undefined) {
            if (!checkPost(req.body.email)) {
                const values: Post ={
                    email: email,
                    price: price,
                    is_disp: is_disp
                }
                createPost(values);
                post.push(values);
                res.status(StatusCodes.OK).send('Status ok');
            } else {
                res.status(StatusCodes.BAD_REQUEST).send('Bad request');
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).send('Bad request');
        }
    } catch (err) {
        console.error(err);
        res.status(StatusCodes.BAD_REQUEST).send('Bad request');
    }
}
