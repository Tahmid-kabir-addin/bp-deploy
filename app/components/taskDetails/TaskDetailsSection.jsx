import { Badge, LegacyCard } from "@shopify/polaris";
import React from "react";
// import { useSelector } from 'react-redux';

const task = {
  changes: "Price: 11.00 -> 12.10\nCompare at price: no change",
  applyTo: "Whole store",
  exclude: "Nothing",
  status: "Completed",
  createdAt: "2021-09-01 12:00:00",
};

const TaskDetailsSection = ({ taskId }) => {
  //   const id = 1;
  // const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === id));
  // console.log(task);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px", // Adjust this value to control the vertical gap between items
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
            <div style={contentStyle}>{task?.changes}</div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Apply to</h1>
            <div style={contentStyle}>{task?.applyTo}</div>
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
            <h1 style={labelStyle}>Status</h1>
            <div style={contentStyle}>
              <Badge tone={getStatusBadgeStatus(task?.status)}>
                {task?.status}
              </Badge>
            </div>
          </div>
        </LegacyCard.Section>

        <LegacyCard.Section>
          <div style={containerStyle}>
            <h1 style={labelStyle}>Created at</h1>
            <div style={contentStyle}>{task?.created}</div>
          </div>
        </LegacyCard.Section>
      </LegacyCard>
    </div>
  );
};

export default TaskDetailsSection;

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
