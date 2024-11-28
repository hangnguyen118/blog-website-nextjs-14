'use server'
import { cookies } from 'next/headers'

export async function setCookie(jwt: string) {
    const cookieStore = await cookies();
    cookieStore.set("jwt", jwt);
}

export async function getCookie(name: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get(name);
    return token?.value;
}

export async function deleteCookie(name: string) {
    const cookieStore = await cookies();
    cookieStore.delete(name);
    return;
}