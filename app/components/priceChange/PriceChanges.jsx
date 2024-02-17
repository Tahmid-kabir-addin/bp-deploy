import { Badge, DataTable, LegacyCard, Page } from "@shopify/polaris";
import React from "react";

const PriceChangeDetails = ({ id }) => {
  const pathParts = window.location.pathname.split("/");
  console.log("🚀 ~ PriceChangeDetails ~ pathParts:", pathParts);
  const pageType = pathParts[1]; // sales or tasks

  // Define the backAction URL based on the current page type
  let backActionUrl;
  if (pageType === "sales") {
    backActionUrl = `/sales/details/${id}`;
  } else if (pageType === "tasks") {
    backActionUrl = `/tasks/details/${id}`;
  } else {
    // Handle the case when the page type is neither sales nor tasks
    backActionUrl = "/"; // You can set a default URL or handle this case as needed
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const labelStyle = {
    flex: "1",
    fontWeight: "600",
    marginRight: "20px",
  };

  const contentStyle = {
    flex: "3",
  };

  const rows = [
    ["Default Title", "-", "Price: 11.00 -> 12.10"],
    ["Mauve Cashmere Scarf", "-", "Price: 11.00 -> 12.10"],
  ];

  return (
    <div>
      <Page
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            Price Change Details <Badge status="success">Applied</Badge>
          </div>
        }
        backAction={{ url: backActionUrl }}
      >
        <LegacyCard sectioned>
          <LegacyCard.Section>
            <div style={containerStyle}>
              <h1 style={labelStyle}>Product</h1>
              <div style={contentStyle}>Product Name</div>
            </div>
          </LegacyCard.Section>

          <LegacyCard.Section>
            <div style={containerStyle}>
              <h1 style={labelStyle}>Applied</h1>
              <div style={contentStyle}>September 22, 2023 at 5:22 PM</div>
            </div>
          </LegacyCard.Section>
        </LegacyCard>

        <LegacyCard title="Variants">
          <DataTable
            columnContentTypes={["text", "text", "text"]}
            headings={[
              <h1 style={{ fontWeight: "600" }}>Title</h1>,
              <h1 style={{ fontWeight: "600" }}>SKU</h1>,
              <h1 style={{ fontWeight: "600" }}>Changes</h1>,
            ]}
            rows={rows}
          />
        </LegacyCard>
      </Page>
    </div>
  );
};

export default PriceChangeDetails;
