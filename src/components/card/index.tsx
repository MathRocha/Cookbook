import type { Receita } from "../../interfaces/receita";
import { Rating } from "../rating";
import "./styles.css";

interface CardProps {
  receita: Receita;
}

export function Card(props: CardProps) {
  return (
    <div className="list_item">
      <img src={props.receita.image} width="100%" />
      <div className="list_item_info">
        <h2>{props.receita.name}</h2>
        <div className="item_ratings">
          <Rating rating={props.receita.rating} />
        </div>

        <p>Cuisine: {props.receita.cuisine}</p>
        <p>Difficulty: {props.receita.difficulty}</p>

        <div className="tag_group">
          {props.receita.tags.map((tag, index) => (
            <span className="item_tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
