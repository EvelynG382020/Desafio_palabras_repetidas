function countByWord() {
  const text = document.getElementById('texto-entrada').innerText.trim().toLowerCase();
  console.log(text);

  acum = {};
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++){
    const palabra_actual = words[i]
    if (acum[palabra_actual]) {
      acum[palabra_actual]++;     
    }
    else {
      acum[palabra_actual] = 1
    }
  }
  return acum;
}
function text(word, cant){

  var div = document.getElementById("resultados");

  var p = document.createElement("p");
  div.appendChild(p);

  var strong = document.createElement("strong");
  var texto_strong = document.createTextNode("Palabra: "+ word);
  strong.appendChild(texto_strong);
  p.appendChild(texto_strong);

  var span = document.createElement("span");
  var texto_span = document.createTextNode(", Cantidad: "+ cant);
  span.appendChild(texto_span);
  p.appendChild(texto_span);

}

Object.entries(countByWord()).forEach(array =>{
  text(array[0], array[1])
})