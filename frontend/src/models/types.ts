export type Freelancer = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    competencies: string[]
}

export type Recruiter = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    competencies: string[];
}

export type Post = {
    email: string;
    price: number;
    id_disp: Boolean;
}