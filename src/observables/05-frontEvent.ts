import { Observer, fromEvent } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("[completado] "),
};

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

src1$.subscribe(({ x, y }) => console.log(x, y));
src2$.subscribe((evento) => console.log("evento:", evento.key));
