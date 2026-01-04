import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";
import type { Receita } from "../../interfaces/receita";
import "./styles.css";
import { Card } from "../../components/card";
import { MdArrowBackIos } from "react-icons/md";

export function Detail() {
  const { id } = useParams();
  const [receita, setReceita] = useState<Receita | null>(null);

  async function getRecipe() {
    try {
      const response = await api.get(`recipes/${id}`);
      console.log(response.data);
      setReceita(response.data);
    } catch (error) {
      alert("Error fetching recipe");
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <main>
      <Link to="/" className="link_back">
        <MdArrowBackIos />
        Back to list
      </Link>
      {receita && (
        <>
          <div className="receita_container">
            <Card receita={receita} />
          </div>

          <div className="receita_container receita_prep">
            <h3>Ingredients:</h3>
            <ul>
              {receita.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <br />
            
            <h3>Instructions:</h3>
            <ul>
              {receita.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
