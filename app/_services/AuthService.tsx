import axios from "axios";

export type AuthFormValues = {
    username?: string,
    email: string,
    password: string,
    terms?: boolean;
}
export const authService = {
    login: async ({ email, password }: AuthFormValues) => {
        return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
            identifier: email,
            password,
        });
    },
    register: async ({ username, email, password }: AuthFormValues) => {
        return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, {
            username,
            email,
            password,
        });
    }
}
