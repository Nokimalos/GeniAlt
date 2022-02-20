import { prisma } from '../index';

export type Freelancer = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    competencies: string[]
}

export const createFreelancer = async (freelancer: Freelancer): Promise<Freelancer | null> => {
    try {
        await prisma.freelancer.create({
            data: freelancer
        })
        return freelancer;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getFreelancer = async (email: string): Promise<Freelancer | null> => {
    try {
        const freelance : Freelancer | null = await prisma.freelancer.findFirst({
            where: {
                email: email
            },
        });
        return freelance;
    } catch (err) {
        console.error(err);
    }
    return null;
}