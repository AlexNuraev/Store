
import axios from "axios";
import Products from "./Products.js";

let products = [];

const getProduct = async () => {
  try {
    const data = await axios.get("http://127.0.0.1:8000/products");
    products = data.data;
  } catch (err) {
    console.log(err);
  }
}

getProduct();


// const products = new Products();
// console.log('APPJS');
// window.addEventListener("load", () => {
//   products.getProducts("http://127.0.0.1:8000/products").then((data) => {
//     console.log('hello world');
//     console.log(data);
//   });
// });