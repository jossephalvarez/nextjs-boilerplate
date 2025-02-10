// components/UserList.tsx

'use client';  // Marca este componente como Client Component

import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/userStore';  // Usamos la tienda de usuarios
import { getUsers } from '@/services/userService';  // Importamos el servicio que obtiene los usuarios
import { HttpError } from '@/errors/HttpError';
import UserCard from "@/components/UserCard";  // Importamos la clase HttpError

export default function UserList() {
    const [loading, setLoading] = useState(true);  // Para gestionar el estado de carga
    const [error, setError] = useState<string | null>(null);  // Para gestionar los errores
    const users = useUserStore((state) => state.users);  // Obtenemos los usuarios desde la tienda de zustand
    const setUsers = useUserStore((state) => state.setUsers);  // Usamos la tienda para actualizar los usuarios

    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await getUsers();  // Llamamos al servicio getUsers
                setUsers(users);  // Actualizamos el estado global con los usuarios
            } catch (error: unknown) {
                // Aquí refinamos el tipo de error usando 'instanceof'
                if (error instanceof HttpError) {
                    // Si el error es una instancia de HttpError, lo manejamos como un error HTTP
                    setError(`Error fetching users: ${error.message} (Status Code: ${error.statusCode})`);
                } else {
                    // Si no es un HttpError, lo tratamos como un error genérico
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);  // Terminamos la carga sin importar si hubo un error o no
            }
        }

        fetchUsers();  // Ejecutamos la función para obtener los usuarios
    }, [setUsers]);  // Solo se ejecuta una vez cuando el componente se monta

    if (loading) return <div>Loading...</div>;  // Muestra el mensaje de carga mientras obtenemos los datos
    if (error) return <div>{error}</div>;  // Muestra el mensaje de error si algo sale mal

    return (
        <ul>
            <div className="user-list">
                {users.map((user) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </div>
        </ul>
    );
}
