import { Freelancer } from '../models/freelancer';
import { Recruiter } from '../models/recruiters';
import { StatusCodes } from 'http-status-codes';
import { checkLoginFreelancer, checkLoginRecruiter, checkAll } from './utils';
import express from 'express';
import cookieparser from 'cookie-parser';
import jwt from 'jsonwebtoken';

let freelancer: Freelancer[] = [];
let recruiter: Recruiter[] = [];

export const jwtRegisterFreelancer = (req: express.Request, res: express.Response) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const competencies = req.body.competencies;

    if (checkAll(firstname, lastname, email, password, competencies)) {
        const values : Freelancer = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            competencies: competencies
        };
        freelancer.push(values);
        res.status(StatusCodes.OK).send(jwt.sign({ email: email }, "password", { expiresIn: '1 hour' }));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).send("Bad request");
    }
}

export const jwtLoginFreelancer = (req: express.Request, res: express.Response) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const competencies = req.body.competencies;

    if (checkAll(firstname, lastname, email, password, competencies)) {
        if (checkLoginFreelancer(req.body.email, req.body.password))
            res.status(StatusCodes.OK).send(jwt.sign({ email: req.body.email }, "password", { expiresIn: '1 hour' }));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).send("Bad request");
    }
}

export const jwtRegisterRecruiter = (req: express.Request, res: express.Response) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const competencies = req.body.competencies;

    if (checkAll(firstname, lastname, email, password, competencies)) {
        const values : Recruiter = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            competencies: competencies
        };
        freelancer.push(values);
        res.status(StatusCodes.OK).send(jwt.sign({ email: email }, "password", { expiresIn: '1 hour' }));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).send("Bad request");
    }
}

export const jwtLoginRecruiter = (req: express.Request, res: express.Response) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const competencies = req.body.competencies;

    if (checkAll(firstname, lastname, email, password, competencies)) {
        if (checkLoginRecruiter(req.body.email, req.body.password))
            res.status(StatusCodes.OK).send(jwt.sign({ email: req.body.email }, "password", { expiresIn: '1 hour' }));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).send("Bad request");
    }
}