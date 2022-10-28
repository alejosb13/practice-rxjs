import { fromEvent, map, mapTo, pluck, range } from "rxjs";

// range(1, 5)
//   .pipe(map<number, number>((value) => value * 10))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyLetters = keyUp$.pipe(map((event) => event.key));
const keyLettersPluck = keyUp$.pipe(pluck("key", "code"));
const keyLettersMapto = keyUp$.pipe(mapTo({ v: 1 }));

keyLetters.subscribe((val) => console.log("[map]: ", val));
keyLettersPluck.subscribe((val) => console.log("[pluck]: ", val));
keyLettersMapto.subscribe((val) => console.log("[mapTo]: ", val));
