import {
  Badge,
  Button,
  DataTable,
  Icon,
  LegacyCard,
  TextField,
} from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TasksLogs = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { taskId } = useParams();

  const rows = [
    {
      id: 1,
      product: "Current",
      changes: (
        <>
          Price: 11.00 -&gt; 12.10
          <br />
          Compare at price: no change
        </>
      ),
      status: "Applied",
    },
  ];

  const handleDetailsClick = (rowData) => {
    navigate(`/tasks/details/${taskId}/price_changes/${rowData.id}`);
    console.log(rowData);
  };

  // Filter rows based on search text
  const filteredRows = rows.filter((row) =>
    row.product.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div>
      <LegacyCard title="Logs">
        <LegacyCard.Section>
          <TextField
            value={searchText}
            onChange={setSearchText}
            placeholder="Product Name"
            prefix={<Icon source={SearchIcon} color="base" />}
          />
        </LegacyCard.Section>

        <DataTable
          columnContentTypes={["text", "text", "text"]}
          headings={[
            <h1 style={{ fontWeight: "600" }}>Product</h1>,
            <h1 style={{ fontWeight: "600" }}>Changes</h1>,
            <h1 style={{ fontWeight: "600" }}>Status</h1>,
            <h1 style={{ fontWeight: "600" }}>Action</h1>,
          ]}
          rows={filteredRows.map((row, index) => [
            row.product,
            row.changes,
            <Badge tone={getStatusBadgeStatus(row.status)}>{row.status}</Badge>,
            <Button onClick={() => handleDetailsClick(row)} size="large">
              Details
            </Button>,
          ])}
          verticalAlign="middle"
        />
      </LegacyCard>
    </div>
  );
};

export default TasksLogs;

function getStatusBadgeStatus(status) {
  switch (status) {
    case "Applied":
      return "success";
    case "Canceled":
      return "critical";
    case "Archived":
      return "attention";
    default:
      return "default"; // Set a default status if needed
  }
}
