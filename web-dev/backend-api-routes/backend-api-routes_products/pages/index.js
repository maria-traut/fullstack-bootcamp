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

// JSON.stringify for the return of one complete object
// <pre> meaning preformatted text)
// null and 2 for styling

/*
 return (
<pre>
      {JSON.stringify(products, null, 2)}
    </pre>
  );
  */
