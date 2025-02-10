// app/users/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation'; // Usar useParams de next/navigation
import { User } from '@/types/User';
import {useFetch} from "@/hooks/useFetch";
import { USERS_API } from '@/constants/api';
const UserDetailPage: React.FC = () => {
    const { id } = useParams();  // Utilizamos useParams para obtener el id de la URL
    const { data: user, loading, error } = useFetch<User>(`${USERS_API}/${id}`);


    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>Detalles de {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Teléfono: {user?.phone}</p>
            <p>Dirección: {user.address?.street}, {user.address?.city}</p>
        </div>
    );
};

export default UserDetailPage;
