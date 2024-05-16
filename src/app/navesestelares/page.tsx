import Link from "next/link";
import { API_BASE_URL } from "@/utils/constans"; 

const getNavesEstelaresList = async () => {
  const res = await fetch(`${API_BASE_URL}/starships`);
  if (!res.ok) {
    throw new Error("A força não está do nosso lado");
  }
  return res.json();
}

const NavesEstelares = async () => {
  const navesestelares = await getNavesEstelaresList();
  console.log("NavesEstelares:", navesestelares);
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {navesestelares?.results.map((item: any) => (
        <div className="item" key={item.id}>
          <img src="https://wallpaperaccess.com/full/3327272.jpg"alt="" />
          <h2>{item.name}</h2>
          <p>MGLT: {item.MGLT}</p>
          <p>Capacidade de Carga: {item.cargo_capacity}</p>
          <p>Quanto tempo Utililizada: {item.consumables}</p>
          <p>Valor: {item.cost_in_credits}</p>
          <p>tripulação: {item.crew}</p>
          <p>modelo: {item.model}</p>
          <p>fabricante: {item.manufacturer}</p>
          <p>Velocidade Máxima na Atmosfera: {item.max_atmosphering_speed}</p>
          <p>Classificação do Hiperpropulsor: {item.hyperdrive_rating}</p>
        </div>
      ))}
    </div>
  );
};

export default NavesEstelares;