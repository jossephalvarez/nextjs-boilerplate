// store/userStore.ts

import {create} from "zustand/react";
import { User } from '@/types/User';

type UserState = {
    users: User[];
    setUsers: (users: User[]) => void;
};

export const useUserStore = create<UserState>((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
}));
