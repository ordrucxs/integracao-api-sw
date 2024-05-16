import Link from "next/link";
import { API_BASE_URL } from "@/utils/constans"; 

const getFilmesList = async () => {
  const res = await fetch(`${API_BASE_URL}/films`);
  if (!res.ok) {
    throw new Error("A força não está do nosso lado");
  }
  return res.json();
}

const Filmes = async () => {
  const filmes = await getFilmesList();
  console.log("FILMES:", filmes);
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {filmes?.results.map((item: any) => (
        <div className="item" key={item.id}>
          <img src="https://wallpaperaccess.com/full/2564207.jpg" alt="" />
          <h2>{item.name}</h2>
          <p>Diretor: {item.director}</p>
          <p>Criação: {item.created}</p>
          <p>Data de edição: {item.edited}</p>
        </div>
      ))}
    </div>
  );
};

export default Filmes;