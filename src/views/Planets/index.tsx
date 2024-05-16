import Link from "next/link";
import { API_BASE_URL } from "@/utils/constans"; 



const getPlanetsList = async () => {
  const res = await fetch(`${API_BASE_URL}planets`);
  if (!res.ok) {
    throw new Error("A força não está do nosso lado");
  }
  return res.json();
}

const Planets = async () => {
  const planets = await getPlanetsList();
  console.log("Planets:", planets);
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {planets?.results.map((item: any) => (
        <div className="item" key={item.id}>
          <img src="https://picsum.photos/400/300" alt="" />
          <h2>{item.name}</h2>
          <p>Altura: {item.rotation_period}</p>
          <p>Massa: {item.orbital_period}</p>
          <p>Diâmetro: {item.diameter}</p>
          <p>Clima: {item.climate}</p>
          <p>Gravidade: {item.gravity}</p>
          <p>Terreno: {item.terrain}</p>
          <p>Água Superficial: {item.surface_water}</p>
        </div>
      ))}
    </div>
  );
};

export default Planets;