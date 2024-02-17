import { BlockStack, Page } from "@shopify/polaris";
import React from "react";
import { useParams } from "react-router-dom";
import SalesDetailsSection from "../components/saleDetails/SalesDetailsSection";
import SalesLogs from "../components/saleDetails/SalesLogs";

const SalesDetails = () => {
  const { saleId } = useParams();
  const sale = {
    title: "Bristy Sell",
  };

  return (
    <div>
      <Page
        title={sale?.title}
        backAction={{ url: "/app/sales" }}
        secondaryActions={[
          {
            content: "Copy to new sale",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Copy to new sale clicked."),
          },
          {
            content: "Edit sale",
            onAction: () => alert("Edit sale button clicked."),
          },
        ]}
      >
        <BlockStack gap="500">
          <SalesDetailsSection saleId={saleId} />
          <SalesLogs />
        </BlockStack>
      </Page>
    </div>
  );
};

export default SalesDetails;
