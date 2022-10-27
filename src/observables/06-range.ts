import { asyncScheduler, Observer, of, range } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("[completado] "),
};

// const src1$ = of(1,2,3,4,5,6,7,8,9,10);
const src1$ = range(-2,10,asyncScheduler);

console.log("[inicio]")
src1$.subscribe(observer);
console.log("[fin]")
