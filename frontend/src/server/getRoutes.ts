import { AxiosResponse } from "axios";
import { backendURL } from "./setBackend";
import { Freelancer, Recruiter, Post } from "../models/types";
import statusChecker from "./statusChecker";

export const getPosts = () =>
    backendURL
        .get('/getPosts')
        .then((res) => {
            const status = res.status;
            const data = res.data;

            console.log(data);
            return (statusChecker(status)) ? undefined : data;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
        }
);

export const getUser = () =>
    backendURL
        .get('/getUser')
        .then((res) => {
            const status = res.status;
            const data = res.data;

            console.log(data);
            return (statusChecker(status)) ? undefined : data;
        })
        .catch((error) => {
            console.error(`error: ${error}`);
        }
);
