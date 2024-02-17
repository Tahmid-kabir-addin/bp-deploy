import {
  Badge,
  Button,
  ButtonGroup,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const CanceledTasksTable = ({ rows }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (rowData) => {
    navigate(`/tasks/details/${rowData.id}`);
    console.log("Details clicked for row:", rowData);
  };

  const canceledRows = rows.filter((row) => row.status === "Canceled");

  return (
    <div>
      {canceledRows.length > 0 ? (
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text"]}
          headings={["Changes", "Apply to", "Created", "Status", "Actions"]}
          rows={canceledRows.map((row, index) => [
            row.changes,
            row.applyTo,
            row.created,
            <Badge tone="critical">{row.status}</Badge>,
            <ButtonGroup>
              {/* Add onClick handler to the "Details" button */}
              <Button size="large" onClick={() => handleDetailsClick(row)}>
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
              No canceled tasks found.
            </h1>
            <p>Try changing the filters or search term.</p>
          </div>
        </LegacyCard>
      )}
    </div>
  );
};

export default CanceledTasksTable;
