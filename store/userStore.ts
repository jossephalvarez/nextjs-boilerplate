import { create } from "zustand";
import { getUsers } from "@/services/userService";
import {User} from "@/types/User";

interface UserStore {
    users: User[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const users = await getUsers();
            set({ users, loading: false });
        } catch (error) {
            set({ error: "Error fetching users", loading: false });
        }
    },
}));
