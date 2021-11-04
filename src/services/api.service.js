export default {
  async index() {
    const data = await fetch("http://localhost:3000/api/products");
    return data.json();
  },
};
