import { Outlet, json, useLoaderData } from "@remix-run/react";
import { AppProvider } from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function Sales() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: polarisStyles }];
}
