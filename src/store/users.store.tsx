import { create } from "zustand";
import { UserType } from "../types";

const usersGlobalStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (user: UserType) => set({ currentUser: user }),
}));

export default usersGlobalStore;

export interface UsersStoreType {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType) => void;
  
}
