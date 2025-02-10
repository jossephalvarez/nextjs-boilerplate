// app/users/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Usar useParams de next/navigation
import { User } from '@/types/User';

const UserDetailPage: React.FC = () => {
    const { id } = useParams();  // Utilizamos useParams para obtener el id de la URL
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (id) {
            // Simulamos una llamada a la API para obtener los detalles del usuario
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => response.json())
                .then((data) => setUser(data));
        }
    }, [id]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>Detalles de {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Teléfono: {user.phone}</p>
            <p>Dirección: {user.address.street}, {user.address.city}</p>
        </div>
    );
};

export default UserDetailPage;
