// Components/Card.tsx
import { CardProps } from "../Interfaces/Components/CardProps";

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      {props.image && <img src={props.image} alt={props.title} />}
      <div>
        <h2>{props.title}</h2>
        {props.description && <p>{props.description}</p>}
        {props.children} {/* Renderiza el contenido personalizado */}
      </div>
    </div>
  );
};