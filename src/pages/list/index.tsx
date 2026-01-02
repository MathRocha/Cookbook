import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";
import { Rating } from "../../components/rating";

interface Lista {
  id: number;
  name: string;
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: string[];
  userId: number;
}

export function List() {
  const [lista, setLista] = useState<Lista[]>([]);

  async function getLista() {
    try {
      const response = await api.get("recipes?limit=0");
      console.log(response.data);
      setLista(response.data.recipes);
    } catch (error) {
      alert("Erro ao buscar lista de receitas");
    }
  }

  useEffect(() => {
    getLista();
  }, []);

  return (
    <main className="list_container">
      {lista.map((item) => (
        <Link to={`/${item.id}`} key={item.id} style={{ display: "flex" }}>
          <div className="list_item">
            <img src={item.image} width="100%" />
            <div className="list_item_info">
              <h2>{item.name}</h2>
              <div className="item_ratings">
                <Rating rating={item.rating} />
              </div>

              <p>Cuisine: {item.cuisine}</p>
              <p>Difficulty: {item.difficulty}</p>

              <div className="tag_group">
                {item.tags.map((tag) => (
                  <span className="item_tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
