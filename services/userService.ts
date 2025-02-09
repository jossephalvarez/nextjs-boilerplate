// services/userService.ts

import { HttpError } from '@/errors/HttpError';  // Importamos la clase HttpError
import { User } from '@/types/User';  // Importamos el tipo User
import { USERS_API } from '@/constants/api';  // Importamos la URL de la API

// Función para obtener los usuarios desde la API
export async function getUsers(): Promise<User[]> {
    try {
        // Realizamos la llamada a la API usando fetch
        const response = await fetch(USERS_API);

        // Verificamos si la respuesta no es "ok" (status code no está en el rango 200-299)
        if (!response.ok) {
            // Lanzamos un HttpError con el código de estado y un mensaje adecuado
            throw new HttpError('Error fetching users', response.status);
        }

        // Si la respuesta es válida, parseamos la respuesta JSON a un array de usuarios
        const data: User[] = await response.json();

        // Retornamos los usuarios obtenidos
        return data;
    } catch (error: unknown) {
        // Si hay un error, lo manejamos aquí:
        if (error instanceof HttpError) {
            // Si es un HttpError, lo lanzamos para que lo maneje el componente o el middleware
            throw error;
        } else {
            // Si el error no es un HttpError, lanzamos un error genérico
            throw new Error('An unexpected error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    }
}
