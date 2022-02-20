import { prisma } from '../index';

export type Recruiter = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    competencies: string[]
}

export const createRecruiter = async (recruiters: Recruiter): Promise<Recruiter | null> => {
    try {
        await prisma.recruiter.create({
            data: recruiters
        })
        return recruiters;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getRecruiter = async (email: string): Promise<Recruiter | null> => {
    try {
        const recruiters : Recruiter | null = await prisma.recruiter.findFirst({
            where: {
                email: email
            },
        });
        return recruiters;
    } catch (err) {
        console.error(err);
    }
    return null;
}