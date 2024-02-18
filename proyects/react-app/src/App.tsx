import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import Form from "./components/Form";
import { User } from "./types";

const INITIAL_USERS: User[] = [
  {
    id: 1,
    name: "Juan",
    role: "Desarrollador",
    avatar: "https://i.pravatar.cc/150?u=midudev",
  },
  {
    id: 2,
    name: "Ana",
    role: "Diseñador",
    avatar: "https://i.pravatar.cc/150?u=Test",
  },
  {
    id: 3,
    name: "Pedro",
    role: "Tester",
    avatar: "https://i.pravatar.cc/150?u=Sosos",
  },
];

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(INITIAL_USERS);
  }, []);

  return (
    <div className="App">
      <h2>Usuarios</h2>
      <List users={users} />
      <Form onNewSub={setUsers}></Form>
    </div>
  );
}

export default App;
