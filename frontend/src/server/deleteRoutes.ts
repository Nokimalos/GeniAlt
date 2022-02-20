import { AxiosResponse } from "axios";
import { backendURL } from "./setBackend";
import { Freelancer, Recruiter, Post } from "../models/types";
import statusChecker from "./statusChecker";

// export const deleteToken = () =>
//     backendURL
//         .get('/deleteToken')
//         .then((res) => {
//             console.log(res.data);
//             return res.data;
//         })
//         .catch((error) => {
//             console.error(`error: ${error}`);
//         }
// );