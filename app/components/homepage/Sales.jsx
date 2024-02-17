import { Button, LegacyCard } from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const navigate = useNavigate();

  const handleAllSalesClick = () => {
    console.log("clicked all sales.");
    navigate("/sales/all");
  };

  const handleActiveClick = () => {
    console.log("clicked active sales.");
    navigate("/sales/active");
  };

  const handleScheduledClick = () => {
    console.log("clicked scheduled sales.");
    navigate("/sales/scheduled");
  };

  const handleCompletedClick = () => {
    console.log("clicked completed sales.");
    navigate("/sales/completed");
  };

  const handleLearnMoreClick = () => {
    console.log("clicked sales learn more.");
  };

  return (
    <div>
      <LegacyCard
        title="sales"
        actions={[
          {
            content: "Create sale",
            onAction: () => {
              navigate("/sales/new");
            },
          },
        ]}
      >
        <LegacyCard.Section>
          <p>Run manual or scheduled sales.</p>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="monochromePlain" onClick={handleAllSalesClick}>
                All sales
              </Button>
              <label>1</label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="monochromePlain" onClick={handleActiveClick}>
                Active
              </Button>
              <label>1</label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="monochromePlain" onClick={handleScheduledClick}>
                Scheduled
              </Button>
              <label>1</label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="monochromePlain" onClick={handleCompletedClick}>
                Completed
              </Button>
              <label>0</label>
            </div>

            <div style={{ textAlign: "left" }}>
              <Button onClick={handleLearnMoreClick} size="large">
                Learn more
              </Button>
            </div>
          </div>
        </LegacyCard.Section>
      </LegacyCard>
    </div>
  );
};

export default Sales;
