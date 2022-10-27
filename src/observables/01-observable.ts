import { Observable } from "rxjs";

const obs$ = new Observable<string>((subscriber) => {
  // solo permite string porque defini el tipo en la linea 4

  subscriber.next("hola");
  subscriber.next("mundo");

  subscriber.next("hola");
  subscriber.next("mundo");

  subscriber.complete(); // marco como completado el observable
  subscriber.next("mundo"); // no se envia devido a que ya fue completado
});

obs$.subscribe(
  (valor) => console.log("next: ", valor),
  (error) => console.warn("error: ", error),
  () => console.info("-- complete --")
);
