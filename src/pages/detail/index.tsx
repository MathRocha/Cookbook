import { useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();

  async function getRecipe() {
    try {
      const response = await api.get(`recipes/${id}`);
      console.log(response.data);
    } catch (error) {
      alert("Erro ao buscar receita");
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <main>
      <h1>Detail</h1>
    </main>
  );
}
