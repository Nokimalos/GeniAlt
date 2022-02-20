import { AxiosResponse } from "axios";
import { backendURL } from "./setBackend";
import { Freelancer, Recruiter, Post } from "../models/types";
import { StatusCodes } from 'http-status-codes';
import statusChecker from "./statusChecker";

export const postRegisterRecruiter = (data: Recruiter) =>
    backendURL
        .post('/register/recruiter', {
            email: data.email,
            password: data.password,
            competencies: data.competencies,
            firstname: data.firstname,
            lastname: data.lastname
          })
        .then((res) => {
            return (statusChecker(res.status)) ? false : true;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
            return false;
        }
);

export const postRegisterFreelancer = (data: Freelancer) =>
    backendURL
        .post('/register/freelancer', {
            email: data.email,
            password: data.password,
            competencies: data.competencies,
            firstname: data.firstname,
            lastname: data.lastname
        })
        .then((res) => {
            return (statusChecker(res.status)) ? false : true;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
            return false;
        }
);

export const postLogin = (data: Freelancer | Recruiter) =>
    backendURL
        .post('/login', {
            email: data.email,
            password: data.password
        })
        .then((res) => {
            return (statusChecker(res.status)) ? false : true;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
            return false;
        }
);

export const postToogleStatus = (status: Boolean) =>
    backendURL
        .post('/togglePostStatus', {
            status: status
        })
        .then((res) => {
            return (statusChecker(res.status)) ? false : true;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
            return false;
        }
);

export const postCreatePost = (data: Post) =>
    backendURL
        .post('/createPost', {
            email: data.email,
            price: data.price,
            is_disp: data.id_disp
        })
        .then((res) => {
            return (statusChecker(res.status)) ? false : true;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
            return false;
        }
);
