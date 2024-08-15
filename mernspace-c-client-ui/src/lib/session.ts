import { cookies } from 'next/headers';

interface Session {
    user: User;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'customer' | 'manager';
    tenant: number | null;
}

export const getSession = async () => {
    return await getSelf();
};

const getSelf = async (): Promise<Session | null> => {
    const response = await fetch(`http://localhost:3100/auth/self`, {
        headers: {
            Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
        },
    });

    if (!response.ok) {
        return null;
    }

    return {
        user: (await response.json()) as User,
    };
};
