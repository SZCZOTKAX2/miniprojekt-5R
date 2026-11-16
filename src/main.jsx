import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import "./index.css";

const builds = [
  {
    title: "Netrunner",
    description: "Atakuje przeciwników za pomocą quickhacków.",
    attributes: "Inteligencja i Zdolności techniczne",
    cyberware: "Cyberdeck",
    weapons: "Quickhacki i broń inteligentna",
  },
  {
    title: "Samuraj z Sandevistanem",
    description: "Spowalnia czas i walczy głównie kataną.",
    attributes: "Refleks i Zdolności techniczne",
    cyberware: "Sandevistan",
    weapons: "Katana i ostrza modliszkowe",
  },
  {
    title: "Solo z shotgunem",
    description: "Wbiega w środek walki i atakuje z bliska.",
    attributes: "Budowa ciała i Zdolności techniczne",
    cyberware: "Berserk",
    weapons: "Strzelby i karabiny maszynowe",
  },
  {
    title: "Gunslinger",
    description: "Celuje w słabe punkty i walczy z dystansu.",
    attributes: "Opanowanie i Refleks",
    cyberware: "Kerenzikov lub Sandevistan",
    weapons: "Pistolety i rewolwery",
  },
  {
    title: "Cichy infiltrator",
    description: "Skrada się i eliminuje wrogów po cichu.",
    attributes: "Opanowanie i Zdolności techniczne",
    cyberware: "Kamuflaż optyczny",
    weapons: "Wyciszony pistolet i noże",
  },
  {
    title: "Technik broni",
    description: "Używa broni technicznej, która przebija osłony.",
    attributes: "Zdolności techniczne i Refleks",
    cyberware: "Wszczepy wspierające broń",
    weapons: "Karabiny i pistolety techniczne",
  },
];

export function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const filteredBuilds = builds.filter((build) =>
    build.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <h2>Popularne buildy</h2>
      <p>
        Wybierz styl gry i sprawdź, jakie atrybuty, wszczepy oraz bronie do
        niego pasują.
      </p>

      <input
        type="text"
        placeholder="Szukaj buildu..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {filteredBuilds.length > 0 ? (
        filteredBuilds.map((build) => <Card key={build.title} build={build} />)
      ) : (
        <p>Nie znaleziono takiego buildu.</p>
      )}

      <footer>
        <p>
          Buildy są przykładowe. Możesz dostosować je do swojego stylu gry.
        </p>
        <a
          href="https://www.cyberpunk.net/en/build-planner"
          target="_blank"
          rel="noreferrer"
        >
          Oficjalny planer buildów
        </a>
        <p>Autor strony: Wojciech Szczodry 5R</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
