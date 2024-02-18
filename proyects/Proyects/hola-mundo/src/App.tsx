import React from "react";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

type User = {
  Username: string;
  Name: string;
  IsFollowing: boolean;
};
const users: User[] = [
  {
    Username: "SammyBits",
    Name: "Samuel Beato",
    IsFollowing: false,
  },
  {
    Username: "Facebook",
    Name: "Meta",
    IsFollowing: true,
  },
  {
    Username: "Twitter",
    Name: "Twitter",
    IsFollowing: true,
  },
  {
    Username: "Google",
    Name: "Alphabet",
    IsFollowing: false,
  },
  {
    Username: "Amazon",
    Name: "Amazon",
    IsFollowing: true,
  },
  {
    Username: "Microsoft",
    Name: "Microsoft",
    IsFollowing: false,
  },
];

export const App = () => {
  return (
    <React.Fragment>
      <section className="App">
        {users.map((user) => {
          const { Username, Name, IsFollowing } = user;
          return (
            <TwitterFollowCard key={Username} Username={Username} IsFollowing={IsFollowing}>
              {Name}
            </TwitterFollowCard>
          );
        })}
      </section>
    </React.Fragment>
  );
};
