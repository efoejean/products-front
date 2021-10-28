import api from "./services/api.service";

api.index().then((data) => {
  console.log(data);
});

const root = document.querySelector("#root");

root.innerHTML = `<p class="text-center">Hello World!</p>`;
