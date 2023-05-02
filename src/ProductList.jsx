import { products } from "./data";

export const ProductList = () => {
  return (
    <div>
      <h1>Product Names</h1>
      {products.map((product) => (
        <li>{product.name}</li>
      ))}
    </div>
  );
};
