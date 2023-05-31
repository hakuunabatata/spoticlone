import {
  Home as HomeIcon,
  Search as SearchIcon,
  Library as LibraryIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const playlists = [
  "Teodoro e Sampaio - Greatest Hits",
  "Playlistão da Massa",
  "Só os Emo veio",
  "Dado pra voce",
  "Escrevi sai correndo",
  "Pau no Cu de quem ta lendo",
  "Franguinho na panela",
  "Pablo Vittar",
  "Tozera Funk BR",
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <SearchIcon />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <LibraryIcon />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            {playlists.map((playlist, index) => (
              <a
                key={index}
                href=""
                className="text-sm text-zinc-400 hover:text-zinc-100"
              >
                {playlist}
              </a>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="w-6 h-6 rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="w-6 h-6 rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {playlists.map((playlist, index) => (
              <a
                href="#"
                key={index}
                className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20"
              >
                <Image
                  src="/capa.jpg"
                  width={104}
                  height={104}
                  alt={playlist}
                />
                <strong>{playlist}</strong>
              </a>
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
