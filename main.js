const render = (pokemon) => {
  const container = document.getElementById("show");
  const div = document.createElement("div");
  const title = document.createElement("h2");
  const sprite = document.createElement("img");
  // Agregar atributos
  title.textContent = pokemon.name + " #" + pokemon.id;
  sprite.src = pokemon.sprites.front_default;
  // Agregar al container
  div.appendChild(title);
  div.appendChild(sprite);
  container.appendChild(div);
};
const clear = () => {
  for (let i = 0; i < 3; i++) {
    document.querySelector("#show div").remove();
  }
};
const urlGenerator = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const id1 = document.getElementById("input1").value;
  const id2 = document.getElementById("input2").value;
  const id3 = document.getElementById("input3").value;

  return [url + id1 + "/", url + id2 + "/", url + id3 + "/"];
};
const promiseGenerator = () => {
  let arr = urlGenerator();

  fetch(arr[0])
    .then((data) => data.json())
    .then((p1) => {
      render(p1);
      return fetch(arr[1]);
    })
    .then((data2) => data2.json())
    .then((p2) => {
      render(p2);
      return fetch(arr[2]);
    })
    .then((data3) => data3.json())
    .then((p3) => render(p3))
    .then(clear())
    .catch((err) => console.log(err));
};
const btn = document.getElementById("buscar");

btn.addEventListener("click", promiseGenerator);
