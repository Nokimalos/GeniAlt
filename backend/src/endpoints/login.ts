import { Freelancer } from '../models/freelancer';
import { Recruiter } from '../models/recruiters';
import { prisma } from '../index';
import { env_seed } from '../serverConfig';
import { StatusCodes } from 'http-status-codes';
import express from 'express';
import  bcrypt from 'bcrypt';
import { checkAll, checkLoginRecruiter, checkLoginFreelancer } from './utils';
import { createFreelancer } from '../models/freelancer';
import { createRecruiter } from '../models/recruiters';

export const loginFreelancer = async (req: express.Request, res: express.Response) => {
    try {
        const seed = await bcrypt.genSalt(env_seed);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        let password = req.body.password;
        const competencies = req.body.competencies;

        password = await bcrypt.hash(req.body.password, seed);

        if (checkAll(firstname, lastname, email, password, competencies)) {
            if (checkLoginFreelancer(req.body.email, req.body.password)) {
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

export const loginRecruiter = async (req: express.Request, res: express.Response) => {
    try {
        const seed = await bcrypt.genSalt(env_seed);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        let password = req.body.password;
        const competencies = req.body.competencies;

        password = await bcrypt.hash(req.body.password, seed);

        if (checkAll(firstname, lastname, email, password, competencies)) {
            if (checkLoginRecruiter(req.body.email, req.body.password)) {
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

