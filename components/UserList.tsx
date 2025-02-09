"use client";

import { useCallback, useMemo, useState } from "react";
import { useFetch } from "@/hooks/useFetch";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserList() {
    const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const sortedUsers = useMemo(() => users?.sort((a, b) => a.name.localeCompare(b.name)) ?? [], [users]);
    const selectUser = useCallback((user: User) => setSelectedUser(user), []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {sortedUsers.map((user) => (
                    <li key={user.id} onClick={() => selectUser(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <div>
                    <h2>{selectedUser.name}</h2>
                    <p>Email: {selectedUser.email}</p>
                </div>
            )}
        </div>
    );
}