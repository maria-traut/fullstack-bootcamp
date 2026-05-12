import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data: products } = useSWR(`api/products`, fetcher);

  if (!products) return <div>Loading ...</div>;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
