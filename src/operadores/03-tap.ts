import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((val) => console.log("[inicio]", val)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("[final]", val),
      complete: () => console.log("[final de la suscripcion]"),
    })
  )
  .subscribe((val) => console.log("Suscribe: " + val));
