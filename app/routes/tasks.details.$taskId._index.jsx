import { BlockStack, Page } from "@shopify/polaris";
import React from "react";
import { useParams } from "react-router-dom";
import TaskDetailsSection from "../components/taskDetails/TaskDetailsSection";
import TasksLogs from "../components/taskDetails/TasksLogs";

const TaskDetails = () => {
  const { taskId } = useParams();
  return (
    <div>
      <Page
        title="Task Details"
        backAction={{ url: "/tasks" }}
        secondaryActions={[
          {
            content: "Archive",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Archive"),
          },
          {
            content: "Copy to new task",
            onAction: () => alert("Copy to new task"),
          },
        ]}
      >
        <BlockStack gap="500">
          <TaskDetailsSection taskId={taskId} />
          <TasksLogs />
        </BlockStack>
      </Page>
    </div>
  );
};

export default TaskDetails;
