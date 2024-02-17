import {
  Badge,
  Button,
  ButtonGroup,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduledSalesTable = ({ rows }) => {
  const navigate = useNavigate();
  const handleDetailsClick = (rowData) => {
    navigate(`/sales/details/${rowData.id}`);
    console.log("Details clicked for now: ", rowData);
  };

  const scheduledRows = rows.filter((row) => row.status === "Scheduled");

  return (
    <div>
      {scheduledRows.length > 0 ? (
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text", "text"]}
          headings={[
            "Title",
            "Changes",
            "Apply to",
            "Scheduled",
            "Status",
            "Actions",
          ]}
          rows={scheduledRows.map((row, index) => [
            row.title,
            row.changes,
            row.applyTo,
            row.schedule,
            <Badge tone="critical">{row.status}</Badge>,
            <ButtonGroup>
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
              No completed tasks found.
            </h1>
            <p>Try changing the filters or search term.</p>
          </div>
        </LegacyCard>
      )}
    </div>
  );
};

export default ScheduledSalesTable;
