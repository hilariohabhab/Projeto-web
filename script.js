// SEMANA 1 - CRIANDO CONSTs

/*const carro1 = "Fiat".toUpperCase();
const modeloPopular = "Uno"
const anoPopular = 1999
const estoque = false
const cores = ["Azul","Preto","Branco","Cinza"]

const carro2 = "Chevrolet".toUpperCase();
const modeloPopular1 = "Cruze";
const anoPopular1 = 2015;
const estoque1 = true;
const cores1 = ["Azul", "Preto", "Branco", "Cinza"];

const carro3 = "Fiat".toUpperCase();
const modeloPopular2 = "Palio";
const anoPopular2 = 2022;
const estoque2 = true;
const cores2 = ["Azul", "Preto", "Branco", "Cinza"];

const mediaAno = (anoPopular + anoPopular1 + anoPopular2) / 3
console.log(`A media dos anos dos veiculos é de ${mediaAno}`)

const verificaBoleans = estoque && estoque1 && estoque2;
console.log("Verificação dos boleanos, resultado:", verificaBoleans);

console.log(`A primeira marca é ${carro1}, a segunda é ${carro2} e a terceira é a ${carro3}`)
console.log("O modelor do carro é " + modeloPopular)
console.log('O ano do veiculo é', anoPopular)
console.log("tem em estoque?", estoque)
console.log(cores)

// SEMANA 5 REFATORANDO "CORES" NO CONSOLE.LOG (1)

for (let i = 0; i <= cores.length; i++) {
  console.log(cores[i]);
}

*/

let carrosObjeto1 = {
  marca: "BMW",
  modelo: "x1",
  ano: 2020,
  emEstoque: true,
  preco: 899000,
  cores: ["Azul", "Preto", "Branco", "Cinza"],
  link: "https://www.socarrao.com.br/parana/curitiba/carros/bmw/x1/2015/flex/automatico/azul/4854113",
};
let carrosObjeto2 = {
  marca: "Ferrari",
  modelo: "Spyder",
  ano: 2019,
  emEstoque: true,
  preco: 1599000,
  cores: ["Azul", "Preto", "Branco", "Cinza"],
  link: "https://www.socarrao.com.br/parana/curitiba/carros/ferrari/ff-4x4/2012/gasolina/automatico/vermelha/4922946",
};

let carrosObjeto3 = {
  marca: "Lamborghini",
  modelo: "Aventador",
  ano: 2022,
  emEstoque: true,
  preco: 1999000,
  cores: ["Azul", "Preto", "Branco", "Cinza"],
  link: "https://www.socarrao.com.br/parana/sao-jose-dos-pinhais/carros/lamborghini/gallardo/2008/gasolina/automatico/laranja/4981472",
};

let mediaPreco =
  (carrosObjeto1.preco + carrosObjeto2.preco + carrosObjeto3.preco) / 3;
mediaPreco = mediaPreco.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(`A média dos preços dos veiculos é de ${mediaPreco}`);

if (
  carrosObjeto1.emEstoque &&
  carrosObjeto2.emEstoque &&
  carrosObjeto3.emEstoque
) {
  console.log("Todos os carros estão em estoque");
} else {
  console.log("Repor estoque");
}

// Array vazio + push()

let arrayCarros = [];

if (carrosObjeto1.emEstoque) {
  arrayCarros.push(carrosObjeto1);
} else {
  alert(
    `Repor estoque de ${carrosObjeto1.marca} modelo ${carrosObjeto1.modelo}`
  );
}

if (carrosObjeto2.emEstoque) {
  arrayCarros.push(carrosObjeto2);
} else {
  alert(
    `Repor estoque de ${carrosObjeto2.marca} modelo ${carrosObjeto2.modelo}`
  );
}

if (carrosObjeto3.emEstoque) {
  arrayCarros.push(carrosObjeto3);
} else {
  alert(
    `Repor estoque de ${carrosObjeto3.marca} modelo ${carrosObjeto3.modelo}`
  );
}

console.log(arrayCarros);

// for (let i in arrayCarros) {
//     for (x in arrayCarros[i]) {
//         console.log(arrayCarros[i][x])
//     }
// }

let stringCor = ``;
for (let i in carrosObjeto1.cores) {
  stringCor += `${carrosObjeto1.cores[i]}, `;
}

let stringCor2 = ``;
for (let i in carrosObjeto2.cores) {
  stringCor2 += `${carrosObjeto2.cores[i]}, `;
}

let stringCor3 = ``;
for (let i in carrosObjeto3.cores) {
  stringCor3 += `${carrosObjeto3.cores[i]}, `;
}
// console.log(stringCor)

console.log(
  `${carrosObjeto1.marca.toUpperCase()} \n ${carrosObjeto1.modelo} \n ${
    carrosObjeto1.ano
  } \n ${carrosObjeto1.emEstoque}\n ${carrosObjeto1.preco}\n ${stringCor}`
);

console.log(
  `${carrosObjeto2.marca.toUpperCase()} \n ${carrosObjeto2.modelo} \n ${
    carrosObjeto2.ano
  } \n ${carrosObjeto2.emEstoque}\n ${carrosObjeto2.preco}\n ${stringCor2}`
);

console.log(
  `${carrosObjeto3.marca.toUpperCase()} \n ${carrosObjeto3.modelo} \n ${
    carrosObjeto3.ano
  } \n ${carrosObjeto3.emEstoque}\n ${carrosObjeto3.preco}\n ${stringCor3}`
);

function imprimeObjeto(imprimir) {
  stringCor = ``;
  stringCor = imprimir;
  console.log(stringCor);
}
imprimeObjeto(carrosObjeto1);

let todosOsCarros = { ...carrosObjeto1, ...carrosObjeto2, ...carrosObjeto3 };
console.log(todosOsCarros);

receberProdutos = () => {
  let containerProdutos = document.getElementById("produtos");
};

// FUNÇÃO DE BUSCA
function searchCarros() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("img");

  for (m = 0; m < x.length; m++) {
    if (!x[m].innerHTML.toLowerCase().includes(input)) {
      x[m].style.display = "none";
    } else {
      x[m].style.display = "list-item";
    }
  }
}

for (let i = 0; i < carrosObjeto1.length; i++) {
  let buscarSuperCarro = document.getElementsByClassName("busca");

  moto1.innerHTML += todosOsCarros[i].marca.toUpperCase();
  li1.innerHTML += "marca: ";
  li2.innerHTML += `modelo: ${todosOsCarros[i].habitantes}`;
  li3.innerHTML += `ano: ${todosOsCarros[i].principaisCidades}`;
  section.setAttribute("id", "section");
  div.appendChild(section);
  li1.appendChild(link);
  section.append(img);
  section.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  console.log(section.style.display);
}
