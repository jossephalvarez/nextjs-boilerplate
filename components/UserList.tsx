// components/UserList.tsx

'use client';  // Marca este componente como Client Component

import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/userStore';  // Usamos la tienda de usuarios
import { getUsers } from '@/services/userService';  // Importamos el servicio que obtiene los usuarios
import { HttpError } from '@/errors/HttpError';
import UserCard from "@/components/UserCard";  // Importamos la clase HttpError

export default function UserList() {
    const users = useUserStore((state) => state.users);
    const setUsers = useUserStore((state) => state.setUsers);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUsers()
            .then(setUsers)
            .catch((error) => {
                if (error instanceof HttpError) {
                    setError(`Error fetching users: ${error.message} (Status Code: ${error.statusCode})`);
                } else {
                    setError("An unexpected error occurred");
                }
            })
            .finally(() => setLoading(false));
    }, [setUsers]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

