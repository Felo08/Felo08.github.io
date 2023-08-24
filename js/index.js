function mostrar_contenido(contenido) {
document.getElementById('contenido').innerHTML = contenido
}

function inicio() {
var contenido = ` <hgroup>
  <h1 id="nombre">FELIPE GUZMÁN</h1>
  <h2>Ingeniero de software | Desarrollo web | Apps de escritorio</h2>
</hgroup>
<button id="call-to-action" onclick="sobreMi()">Conoceme</button>`;

mostrar_contenido(contenido);
}

function sobreMi(){
var contenido = `
<section id="sobre_mi">
  <div class="row">
    <hgroup id="header-sobre-mi">
      <h2>Sobre mi</h2>
    </hgroup>
    <p>Analítico e ingenioso son dos palabras que brevemente me definen muy bien, 
    me atraen los retos (más que todo mentales y lógicos) y lo que quedaba de mis juguetes 
    después de desarmarlos puede dar fe de mi curiosidad. <br> Por lo anterior decidí ser 
    un <span> Ingeniero de Software </span>... bueno eso y la transformación tecnologica 
    que he vivido al ver como estas dan solución a varios problemas al tiempo que impactan
     positivamente en la socidad.</p>
  </div>
</section>
`;


mostrar_contenido(contenido);
}