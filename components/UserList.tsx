// components/UserList.tsx

'use client';  // Marca este componente como Client Component

import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import UserCard from "./UserCard";

export default function UserList() {
    const { users, loading, error, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

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

