interface Props {
  avatar: string;
  first_name: string;
  email: string;
}

export const UserRow = ({  avatar, first_name, email }: Props) => {
  return (
    <tr >
      <td>
        <img src={`${avatar}`} alt="User avatar" />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>
  );
};
