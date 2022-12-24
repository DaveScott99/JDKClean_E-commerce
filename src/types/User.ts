export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
}

export type UserLogin = {
    email: string,
    password: string
}

export type UserRegistry = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    roles: {
        id: number
    }
}