import { useUsers } from "../hooks";
import { UserRow } from "./UserRow";

export const UserPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <div>
      <h3>Usuarios: </h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow key={user.id} {...user} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};
