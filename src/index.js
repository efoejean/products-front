import api from "./services/api.service";
import Form from "./components/Form";
import Table from "./components/Table";

const root = document.querySelector("#root");

api.index().then((products) => {
  root.innerHTML = `<main class="container mx-auto flex flex-col items-center">
${Form} ${Table(products)}</main>`;
});

root.innerHTML = `<p class="text-center">Hello World!</p>`;
