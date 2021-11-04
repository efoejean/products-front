export default (products) => `
  <ul>
    ${products
      .map(
        (product) =>
          `<li><span class="${
            product.stocked ? "text-black" : "text-red-500"
          }">${product.name}</span> ${product.price}</li>`
      )
      .join("")}
  </ul>
`;
