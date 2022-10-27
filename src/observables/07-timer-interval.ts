import { interval, Observer, timer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("[completado] "),
};

// const src1$ = of(1,2,3,4,5,6,7,8,9,10);
const interval$ = interval(1000)
// const timer$ = timer(new Date())
const timer$ = timer(2000,1000)

console.log("[inicio]")
timer$.subscribe(observer);
console.log("[fin]")
