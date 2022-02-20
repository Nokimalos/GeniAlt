import { Freelancer } from '../models/freelancer'
import { Recruiter } from '../models/recruiters'
import { Post } from '../models/post'

export let freelancer: Freelancer[] = [];
export let recruiter: Recruiter[] = [];
export let post: Post[] = [];

export const checkAll = (firstname: String, lastname: String, email: String, password: String, competencies: String[]) : Boolean => {
    if (firstname && lastname && email && password && competencies)
        return true;
    else
        return false;
}

export const checkLoginFreelancer = (email: string, password: string): boolean => {
    for (let i = 0; i < freelancer.length; i++) {
        if (freelancer[i].email === email && freelancer[i].password === password)
            return true;
    }
    return false;
}

export const checkLoginRecruiter = (email: string, password: string): boolean => {
    for (let i = 0; i < recruiter.length; i++) {
        if (recruiter[i].email === email && recruiter[i].password === password)
            return true;
    }
    return false;
}

export const checkPost = (email: string): boolean => {
    for (let i = 0; i < post.length; i++) {
        if (post[i].email === email)
            return true;
    }
    return false;
}