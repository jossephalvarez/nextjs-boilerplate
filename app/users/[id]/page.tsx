// app/users/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation'; // Usar useParams de next/navigation
import { User } from '@/types/User';
import {useFetch} from "@/hooks/useFetch";
import { USERS_API } from '@/constants/api';
import {useUserStore} from "@/store/userStore";
const UserDetailPage: React.FC = () => {
    const { id } = useParams();  // Utilizamos useParams para obtener el id de la URL
    const { data: user, loading, error } = useFetch<User>(`${USERS_API}/${id}`);
    const { users} = useUserStore();


    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>Detalles de {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Teléfono: {user?.phone}</p>
            <p>Dirección: {user.address?.street}, {user.address?.city}</p>
            <br/>
            <h3>There are : {users?.length}</h3>
        {/*    TODO porque cuando refresco esto el store del numero de usuarios desaparece?*/}
        </div>
    );
};

export default UserDetailPage;
