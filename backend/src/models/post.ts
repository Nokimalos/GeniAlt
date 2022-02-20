import { prisma } from '../index';

export type Post = {
    email: string,
    price: number,
    is_disp: boolean
}

export const createPost = async (post: Post): Promise<Post | null> => {
    try {
        await prisma.posts.create({
            data: {
                email: post.email,
                price: post.price,
                is_disp: post.is_disp
            }
        })
        return post;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getPosts = async (): Promise<Post[] | null> => {
    try {
        const post : Post[] | null = await prisma.posts.findMany();
        return post;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getPost = async (email: string): Promise<Post | null> => {
    try {
        const post : Post | null = await prisma.posts.findFirst({
            where: {
                email: email
            },
        });
        return post;
    } catch (err) {
        console.error(err);
    }
    return null;
}