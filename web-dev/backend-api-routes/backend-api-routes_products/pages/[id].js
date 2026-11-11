import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());
export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(id ? `api/products/${id}` : null, fetcher);
  console.log(product);
  if (!product) return <h1>Loading ...</h1>;
  return (
    <>
      <h1>Name: {product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Currency: {product.currency}</p>
      <p>Category: {product.category}</p>
    </>
  );
}

// JSON.stringify for the return of one complete object
// <pre> meaning preformatted text)
// null and 2 for styling

/*
 return (
<pre>
      {JSON.stringify(product, null, 2)}
    </pre>
  );
  */
