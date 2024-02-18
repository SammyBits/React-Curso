import { User } from "../types";

interface Props {
  users: User[];
}

export const List = ({ users }: Props) => {
  const renderList = (): JSX.Element[] => {
    return users.map((user) => (
      <li key={user.id}>
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
        <p>{user.role}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};
