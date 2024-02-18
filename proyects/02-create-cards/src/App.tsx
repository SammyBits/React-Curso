import "./CSS/App.css";
import { Card } from "./Components/Card";
import { CardProps } from "./Interfaces/Components/CardProps";
import { UsersProps } from "./Interfaces/Responses/UsersProps";

// Fetching data from an API
const users: UsersProps[] = await fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json().then((data) => data));
// A simple React component
function App() {
  return (
    <section className="cd-main">
        {users.map((user) => {
          const cardProps: CardProps = {
            title: user.name,
            description: user.email,
          };
          return <Card key={user.id} {...cardProps}>{user.website}<br></br>{user.phone}</Card>;
        })}
      
    </section>
  );
}

export default App;
