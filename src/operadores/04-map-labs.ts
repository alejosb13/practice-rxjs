import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula lacus ipsum, eget congue urna tempor ac. Aliquam at malesuada ex. Nunc id mollis dolor. Nam id orci eget urna sodales dapibus. Praesent vehicula eget lacus vitae efficitur. Etiam a pretium massa, in efficitur mi. Curabitur viverra ante a dictum auctor. Nam rhoncus molestie porttitor. Donec malesuada elit vitae metus hendrerit, eu tincidunt turpis dictum. Quisque in lacus felis.
<br/>  
<br/>  
Morbi ullamcorper gravida libero in fringilla. Fusce ut laoreet elit, sit amet pulvinar nulla. Etiam imperdiet at velit non ornare. Phasellus condimentum nunc vitae urna sollicitudin euismod. Nunc lectus odio, finibus luctus velit sit amet, egestas gravida diam. Nulla fringilla nisi posuere, faucibus ante eu, dictum ligula. Duis sagittis leo ex, at feugiat felis luctus quis. Mauris blandit sapien lacus. Duis tempor lacinia libero et accumsan. Vestibulum vehicula egestas nulla, ut interdum tellus fermentum non. Integer ac eleifend sapien, in pretium lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id mollis libero, at commodo nisl. Nullam nec nisi commodo, pharetra magna vel, ornare lectus. Fusce ac ornare tortor. Suspendisse condimentum vestibulum magna a finibus.
<br/>  
<br/>  
Fusce dui tortor, varius ac feugiat non, pellentesque eget felis. Nunc at massa mi. In hac habitasse platea dictumst. Maecenas fermentum imperdiet tristique. In porttitor tellus ut elit bibendum, ac congue justo aliquam. Etiam pharetra justo lectus, eu cursus mi tincidunt id. Sed erat mauris, molestie in est vel, elementum vulputate quam. Mauris faucibus luctus dui, eu accumsan tellus pellentesque in. Donec a magna non urna mattis ornare interdum eu ligula.
<br/>  
<br/>  
In dignissim erat et metus finibus, id finibus odio ornare. Sed at dapibus felis. Fusce tempor sit amet ex ac aliquam. Mauris facilisis dapibus magna non congue. In hendrerit diam dui, sed suscipit eros tristique sed. Phasellus dapibus magna quis nisi venenatis feugiat. Pellentesque tortor lacus, condimentum ac interdum eu, scelerisque nec neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris laoreet odio a hendrerit rhoncus. Donec placerat magna justo, vitae sagittis ante vulputate vitae.
<br/>  
<br/>  
Integer quis elit nibh. Nullam tempor, lorem et feugiat imperdiet, orci nulla auctor dui, eu vehicula lorem arcu vitae diam. Nunc facilisis sodales odio, a tincidunt felis elementum vel. Fusce ut volutpat erat. Vestibulum iaculis lectus a velit condimentum mollis. In fermentum consectetur mi tempor tempor. Integer in neque eu diam cursus blandit eu vel augue. Phasellus eget convallis arcu, quis egestas purus. Duis eget turpis viverra, maximus nisl sit amet, convallis ante. Praesent et efficitur massa, eu fringilla nisl. Donec suscipit magna a ex pharetra porttitor. Pellentesque ut varius mauris. Suspendisse euismod lorem sit amet magna iaculis, quis semper ipsum rutrum. Aenean varius blandit mi eget porta. Nunc eu varius elit.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calcularPorcentajeScroll = ({
  target: {
    documentElement: { scrollHeight, scrollTop, clientHeight },
  },
}: any) => {
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent<Event>(document, "scroll");

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
