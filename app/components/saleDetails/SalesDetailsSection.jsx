import { Badge, LegacyCard } from "@shopify/polaris";
import React from "react";

const SalesDetailsSection = ({ saleId }) => {
  const sale = {
    changes: (
      <>
        Decrease price by 10%
        <br />
        Set compare at price to price
      </>
    ),
    applyTo: "Whole store",
    schedule: "From Sep 22 at 5:22 PM",
    status: "Active",
    created: "September 22, 2023 at 5:25 PM",
    started: "September 22, 2023 at 5:25 PM",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const labelStyle = {
    flex: "1",
    fontWeight: "600",
    marginRight: "20px", // Adjust this value to control the horizontal gap between label and content
  };

  const contentStyle = {
    flex: "3",
    // fontWeight: '600',
  };

  return (
    <div>
      <LegacyCard>
        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Changes</h1>
            <div style={contentStyle}>{sale?.changes}</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Apply to</h1>
            <div style={contentStyle}>{sale?.applyTo}</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Exclude</h1>
            <div style={contentStyle}>Nothing</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Schedule</h1>
            <div style={contentStyle}>{sale?.schedule}</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Status</h1>
            <div style={contentStyle}>
              <Badge tone={getStatusBadgeStatus(sale?.status)}>
                {sale?.status}
              </Badge>
            </div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Created at</h1>
            <div style={contentStyle}>{sale?.created}</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Started at</h1>
            <div style={contentStyle}>{sale?.started}</div>
          </div>
        </LegacyCard.Section>
      </LegacyCard>
    </div>
  );
};

export default SalesDetailsSection;

function getStatusBadgeStatus(status) {
  switch (status) {
    case "Completed":
      return "success";
    case "Scheduled":
      return "critical";
    case "Active":
      return "attention";
    default:
      return "default"; // Set a default status if needed
  }
}
