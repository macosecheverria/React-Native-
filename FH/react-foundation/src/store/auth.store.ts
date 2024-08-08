import { create } from "zustand";

 interface AuthState {
    status: "authenticated" | "unauthenticated" | "checking";
    token?: string,
    user?: {
        name:string,
        email: string,
        password: string
    }
    login: (email: string, password: string) => void;
    logout: () => void;
 }


 export const useAuthStore = create<AuthState>()((set) => ({
    status: "checking",
    token: undefined,
    user:undefined,

    login(email, password) {
        set({
            status: "authenticated",
            token: "ABC123",
            user: {
                name: "Marcos",
                email: email,
                password: password
            }
        })
    },

    logout () {
        set({
            status: "unauthenticated",
            token: undefined,
            user: undefined
        })
    },
 })
 );