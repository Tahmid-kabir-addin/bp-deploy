import { Button, LegacyCard } from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();

  const handleAllTasksClick = () => {
    console.log("clicked all tasks.");
    navigate("/tasks/all");
  };

  const handleCompletedClick = () => {
    console.log("clicked completed tasks.");
    navigate("/tasks/completed");
  };

  const handleArchivedClick = () => {
    console.log("clicked archived tasks.");
    navigate("/tasks/archived");
  };

  const handleCanceledClick = () => {
    console.log("clicked canceled tasks.");
    navigate("/tasks/canceled");
  };

  const handleLearnMoreClick = () => {
    console.log("clicked tasks learn more.");
  };
  return (
    <div>
      <LegacyCard
        title="Tasks"
        actions={[
          {
            content: "Create task",
            onAction: () => {
              navigate("/tasks/new");
            },
          },
        ]}
      >
        <LegacyCard.Section>
          <p>Bulk edit prices in your shop.</p>
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
              <Button variant="monochromePlain" onClick={handleAllTasksClick}>
                All tasks
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
              <label>1</label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="monochromePlain" onClick={handleArchivedClick}>
                Archived
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
              <Button variant="monochromePlain" onClick={handleCanceledClick}>
                Canceled
              </Button>
              <label>0</label>
            </div>

            <div style={{ textAlign: "left" }}>
              <Button size="large" onClick={handleLearnMoreClick}>
                Learn more
              </Button>
            </div>
          </div>
        </LegacyCard.Section>
      </LegacyCard>
    </div>
  );
};

export default Tasks;
