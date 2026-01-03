import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";
import { Rating } from "../../components/rating";
import type { Receita } from "../../interfaces/receita";

export function List() {
  const [lista, setLista] = useState<Receita[]>([]);

  async function getLista() {
    try {
      const response = await api.get("recipes?limit=0");
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
        <Link to={`/${item.id}`} key={item.id}>
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
                {item.tags.map((tag, index) => (
                  <span className="item_tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
