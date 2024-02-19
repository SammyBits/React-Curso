import { Card } from "../../components/Card/Card";
import "./Home.css";
import { CardProps } from "../../components/Card/CardProps";
import { Topbar } from "../../components/Topbar/Topbar";

const cards: CardProps[] = [
  {
    title: "Donation Card 1",
    value: 5032,
    image:
      "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc",
  },
  {
    title: "User Card 2",
    value: 200,
    image:
      "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc",
  },
  {
    title: "Employee Card 3",
    value: 300,
    image:
      "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc",
  },
  {
    title: "Donor Card 4",
    value: 400,
    image:
      "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc",
  },
 
];
const Home = () => {
  return (
    <div className="home-main">
      <Topbar title="Home"/>
      <section className="home-data">
        {cards.map((card, index) => (
          <Card
            title={card.title}
            value={card.value}
            image={card.image}
            width="100"
            key={index}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
