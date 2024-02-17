import {
  Badge,
  Button,
  ButtonGroup,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const CompletedTasksTable = ({ rows }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (rowData) => {
    navigate(`/tasks/details/${rowData.id}`);
    console.log("Details clicked for row:", rowData);
  };

  const completedRows = rows.filter((row) => row.status === "Completed");

  return (
    <div>
      {completedRows.length > 0 ? (
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text"]}
          headings={["Changes", "Apply to", "Created", "Status", "Actions"]}
          rows={completedRows.map((row, index) => [
            row.changes,
            row.applyTo,
            row.created,
            <Badge status="success" tone="success">
              {row.status}
            </Badge>,
            <ButtonGroup>
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
              No completed tasks found.
            </h1>
            <p>Try changing the filters or search term.</p>
          </div>
        </LegacyCard>
      )}
    </div>
  );
};

export default CompletedTasksTable;
