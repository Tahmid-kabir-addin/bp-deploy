import { useParams } from "@remix-run/react";
import PriceChangeDetails from "../components/priceChange/PriceChanges";

export default function SalesPriceChangeDetails() {
  const { logId } = useParams();
  return <PriceChangeDetails id={logId} />;
}
