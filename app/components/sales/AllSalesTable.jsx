import {
  Badge,
  Button,
  ButtonGroup,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllSalesTable = ({ rows }) => {
  console.log("🚀 ~ AllSalesTable ~ rows:", rows);

  const navigate = useNavigate();
  const handleDetailsClick = (rowData) => {
    navigate(`/sales/details/${rowData.id}`);
    console.log("Details clicked for row: ", rowData);
  };

  return (
    <div>
      {rows.length > 0 ? (
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text", "text"]}
          headings={[
            "Title",
            "Changes",
            "Apply to",
            "Schedule",
            "Status",
            "Actions",
          ]}
          rows={rows.map((row, index) => [
            row.title,
            row.changes,
            row.applyTo,
            row.schedule,
            <Badge tone={getStatusBadgeStatus(row.status)} key={index}>
              {row.status}
            </Badge>,
            <ButtonGroup key={index}>
              {/* Add onClick handler to the "Details" button */}
              <Button onClick={() => handleDetailsClick(row)} size="large">
                Details
              </Button>
              <Button>Rollback</Button>
            </ButtonGroup>,
          ])}
          verticalAlign="middle"
        />
      ) : (
        <LegacyCard>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: "1rem",
              gap: "15px",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              No tasks found.
            </h1>
            <p>Try changing the filters or search term.</p>
          </div>
        </LegacyCard>
      )}
    </div>
  );
};

export default AllSalesTable;

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
