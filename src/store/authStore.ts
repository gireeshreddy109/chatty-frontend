import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
    id: string,
    userName: string,
    fullName: string,
    email: string,
    connectCode: string,
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    setUser: (user: User | null) => void;
    logout: () => void;
}

export const AuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user: User | null) => set({ user }),
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: "auth",
        },
    ),
)