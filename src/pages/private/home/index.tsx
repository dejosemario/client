import usersGlobalStore, { UsersStoreType } from "../../../store/users.store";

export default function HomePage() {
  const { currentUser } = usersGlobalStore() as UsersStoreType;

  return <div className="p-5">Welcome, {currentUser?.name}!</div>;
}
