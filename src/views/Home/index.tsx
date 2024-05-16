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
  console.log(" ~file: index.tsx:12 ~ home ~ peoples:", peoples);
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {peoples?.results.map((item: any) => (
        <div className="item" key={item.id}>
          <img src="https://wallpaperaccess.com/full/317811.jpg" alt="" />
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
      ))}
    </div>
  );
};

export default Home;