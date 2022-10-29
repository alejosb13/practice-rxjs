import { filter, of, pipe } from "rxjs";
type Heroe = { tipo: string; nombre: string };

const personajes: Heroe[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

const heroeCondicion = (personaje: Heroe) => personaje.tipo == "heroe";
const villanoCondicion = (personaje: Heroe) => personaje.tipo == "villano";

const personajes$ = of(...personajes);

personajes$.pipe(filter(heroeCondicion)).subscribe(console.log);
personajes$.pipe(filter(villanoCondicion)).subscribe(console.log);
