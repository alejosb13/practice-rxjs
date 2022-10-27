import { fromEvent, map, range } from "rxjs";

// range(1, 5)
//   .pipe(map<number, number>((value) => value * 10))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyLetters = keyUp$.pipe(map((event) => event.key));

keyLetters.subscribe(console.log);
