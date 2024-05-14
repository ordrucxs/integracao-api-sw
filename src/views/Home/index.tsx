import Link from "next/link";
import { API_BASE_URL } from "@/utils";

const getPeoplesList = async () => {
  const res = await fetch(`${API_BASE_URL}/people`);
  if (!res.ok) {
    throw new Error("A força não está do nosso lado");
  }
  return res.json();
}
const Home = async () => {
  const peoples = await getPeoplesList();
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {peoples?.results.map((item: any) => (
        <Link href={`/peopleDetail/${item.id}`} key={item.id}>
        <div className="item">
          <img src="https://picsum.photos/400/300" alt="" />
          <div>
            <h2>{item.name}</h2>
            <p>Altura: {item.height}</p>
            <p>Massa: {item.mass}</p>
            <p>Cor do Cabelo: {item.hair_color}</p>
            <p>Cor da Pele: {item.skin_color}</p>
            <p>Cor dos Olhos: {item.eye_color}</p>
            <p>Ano de aniversário: {item.birth_year}</p>
            <p>Genêro: {item.gender}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;