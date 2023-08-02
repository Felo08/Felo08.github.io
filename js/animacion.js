function mostrar_contenido(contenido) {
    document.getElementById('contenido').innerHTML = contenido
}

function inicio() {
    var contenido = `    <hgroup>
    <h1 id="nombre">FELIPE GUZMÁN</h1>
    <h2>Ingeniero de software | Desarrollo web | Apps de escritorio</h2>
  </hgroup>
  <button id="call-to-action" onclick="sobreMi()">Conoceme</button>`;

  mostrar_contenido(contenido);
}

function sobreMi(){
    var contenido = `
    <section id="sobre_mi">
      <h2>Sobre mi</h2>
      <p>Ingeniero de software altamente motivado con una sólida
        formación técnica. Amplio conocimiento en programación (Java,
        Python, Nodejs ) y bases de datos (SQL). Experiencia de 1 año en
        roles de desarrollo de aplicaciones de escritorio y web.
        Apasionado por la innovación y el trabajo en equipo. Resido en
        Colombia y estoy emocionado por unirme a Mercado libre para
        contribuir con soluciones creativas y eficientes.</p>
    </section>
    `;

    mostrar_contenido(contenido);
}