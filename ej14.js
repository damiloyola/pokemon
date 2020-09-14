let arr = [];

for (let i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 100);
  arr.push(random);
}

console.log(arr);

// let generateUrl = () => {
//   let url = "https://pokeapi.co/api/v2/pokemon/";
//   let i = 0;
//   do {
//     indexString = Math.floor(Math.random() * 10);
//     if (typeof arr[indexString] !== "string") {
//       arr[indexString] = toString(arr[indexString]);
//       i++;
//     }
//   } while (i < 3);

//   let index = Math.floor(Math.random() * 10);
//   if (typeof index === "string") {
//     throw new Error("Salio un string");
//   } else {
//     let id = arr[index];
//     let finalUrl = url + id + "/";
//     return finalUrl;
//   }
// };

let render = (pokemon) => {
  const container = document.getElementById("container");
  const title = document.createElement("h2");
  const sprite = document.createElement("img");
  // Agregar atributos
  title.textContent = pokemon.name + " #" + pokemon.id;
  sprite.src = pokemon.sprites.front_default;
  // Agregar al container
  container.appendChild(title);
  container.appendChild(sprite);
};

let strings = () => {
  let i = 0;
  do {
    indexString = Math.floor(Math.random() * 10);
    if (typeof arr[indexString] !== "string") {
      arr[indexString] = arr[indexString].toString();
      i++;
    }
  } while (i < 3);
};
strings();
let url = "https://pokeapi.co/api/v2/pokemon/";

let p1 = new Promise((resolve, reject) => {
  let index = Math.floor(Math.random() * 10);
  if (typeof arr[index] === "string") {
    reject("Salio un string");
  } else {
    let finalUrl = url + arr[index] + "/";
    resolve(finalUrl);
  }
});
let p2 = new Promise((resolve, reject) => {
  let index = Math.floor(Math.random() * 10);
  if (typeof arr[index] === "string") {
    reject("Salio un string");
  } else {
    let finalUrl = url + arr[index] + "/";
    resolve(finalUrl);
  }
});
let p3 = new Promise((resolve, reject) => {
  let index = Math.floor(Math.random() * 10);
  if (typeof arr[index] === "string") {
    reject("Salio un string");
  } else {
    let finalUrl = url + arr[index] + "/";
    resolve(finalUrl);
  }
});

// p1.then((data) => fetch(data))
Promise.all([p1, p2, p3])
  .then(([a, b, c]) =>
    Promise.all([fetch(a), fetch(b), fetch(c)]).then(([a, b, c]) =>
      Promise.all([a.json(), b.json(), c.json()]).then((data) =>
        data.forEach((i) => render(i))
      )
    )
  )

  .catch((err) => console.log("error: " + err));
