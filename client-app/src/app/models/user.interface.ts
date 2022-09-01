export type Role = 'ADMIN' | 'SUSCRIPTOR';

export interface loginReq{
    username: string;
    password: string;
}

export interface loginRes{
    message: string;
    id: number;
    role: Role;
    token: string;
}