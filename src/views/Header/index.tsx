import Link from "next/link";
import Image from 'next/image'; 

const Header = () => {
  return (
    <>
     <header className="w-full flex justify-between items-center py-2 px-4 border-b border-yellow-500">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src="https://wallpaperaccess.com/full/2886682.jpg" alt="Star Wars Logo" width={150} height={40} />
        </div>
        <Link href="/" className="hover:text-white transition-colors duration-300 text-yellow-500">Star Wars PERSONAGENS</Link>
      </div>
      <Link href="/filmes" className="hover:text-white font-starwars transition-colors duration-300 text-yellow-500">FILMS</Link>
      <Link href="/dummy" className="hover:text-white font-starwars transition-colors duration-300 text-yellow-500">PLANETS</Link>
      <Link href="/navesestelares" className="hover:text-white font-starwars transition-colors duration-300 text-yellow-500">NAVES ESTELARES</Link>
    </header>
    <footer className="w-full bg-space py-4 px-4 text-center text-gray-300">
    Desenvolvido por <a href="
https://www.linkedin.com/in/pedro-bernardo-401147219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">Pedro Luiz</a> | <a href="https://github.com/ordrucxs" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">GitHub</a>
  </footer>
  </>
  );
};
export default Header;