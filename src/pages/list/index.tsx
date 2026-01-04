import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";
import type { Receita } from "../../interfaces/receita";
import { Card } from "../../components/card";

export function List() {
  const [lista, setLista] = useState<Receita[]>([]);

  async function getLista() {
    try {
      const response = await api.get("recipes?limit=0");
      setLista(response.data.recipes);
    } catch (error) {
      alert("Error fetching recipe list");
    }
  }

  useEffect(() => {
    getLista();
  }, []);

  return (
    <main className="list_container">
      {lista.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <Card receita={item} />
        </Link>
      ))}
    </main>
  );
}
