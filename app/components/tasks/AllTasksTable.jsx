import {
  Badge,
  Button,
  ButtonGroup,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllTasksTable = ({ rows }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (rowData) => {
    navigate(`/tasks/details/${rowData.id}`);
    console.log("Details clicked for row:", rowData);
  };

  return (
    <div>
      {rows.length > 0 ? (
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text"]}
          headings={["Changes", "Apply to", "Created", "Status", "Actions"]}
          rows={rows.map((row, index) => [
            row.changes,
            row.applyTo,
            row.created,
            <Badge tone={getStatusBadgeStatus(row.status)} key={index}>
              {row.status}
            </Badge>,
            <ButtonGroup key={index}>
              {/* Add onClick handler to the "Details" button */}
              <Button onClick={() => handleDetailsClick(row)} size="large">
                Details
              </Button>
              <Button size="large">Rollback</Button>
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

export default AllTasksTable;

function getStatusBadgeStatus(status) {
  switch (status) {
    case "Completed":
      return "success";
    case "Canceled":
      return "critical";
    case "Archived":
      return "attention";
    default:
      return "default"; // Set a default status if needed
  }
}
