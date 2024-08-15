import { create } from "zustand";
import { UserType } from "../types";

const usersGlobalStore = create<UsersStoreType>((set) => ({
  currentUser: null,
  setCurrentUser: (user: UserType | null) => set({ currentUser: user }),
}));

export default usersGlobalStore;

export interface UsersStoreType {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType | null) => void;
  
}
