import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());
export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(`api/products/${id}`, fetcher);
  console.log("product", product);
  if (!product) return <h1>Loading ...</h1>;
  return <p>{product.name}</p>;
}
