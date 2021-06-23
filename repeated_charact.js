
function countByLetter() {
  const text = document.getElementById('texto-entrada').innerText.trim().toLowerCase();
  console.log(text);

  acum = {};
  for (let i = 0; i < text.length; i++){
    const letra_actual = text[i]
    if (acum[letra_actual]) {
        acum[letra_actual]++;     
    }
    else {
        acum[letra_actual] = 1
    }
  }
  return acum;
}
function text(letter, cant){

  var div = document.getElementById("resultados");

  var p = document.createElement("p");
  div.appendChild(p);

  var strong = document.createElement("strong");
  var texto_strong = document.createTextNode("Letra: "+ letter);
  strong.appendChild(texto_strong);
  p.appendChild(texto_strong);

  var span = document.createElement("span");
  var texto_span = document.createTextNode(", Cantidad: "+ cant);
  span.appendChild(texto_span);
  p.appendChild(texto_span);

}

Object.entries(countByLetter()).forEach(array =>{
  text(array[0], array[1])
})
