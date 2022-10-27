import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[next]: ", value),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("[completado] "),
};

const $obs = of<number[]>(...[1, 2, 3, 4, 5, 6, 7, 8]).subscribe(observer);
