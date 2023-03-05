const readline = require("readline-sync");

let properties = [];
let insert;

do {
  insert = readline.question("Adicione um atributo do CSS (ou 'exit' para sair): ").trim().toLowerCase();
  if (insert !== "exit") {
    properties.push(insert);
  }
} while (insert !== "exit");

console.log(properties.sort().join("\n"));









