import { Button, Card, Layout, Page, Tabs } from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AllTasksTable from "../components/tasks/AllTasksTable";
import ArchivedTasksTable from "../components/tasks/ArchivedTasksTable";
import CanceledTasksTable from "../components/tasks/CanceledTasksTable";
import CompletedTasksTable from "../components/tasks/CompletedTasksTable";

const Tasks = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // Default tab is 'all'
  const { status } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    switch (status) {
      case "completed":
        setSelectedTabIndex(1);
        break;
      case "archived":
        setSelectedTabIndex(2);
        break;
      case "canceled":
        setSelectedTabIndex(3);
        break;
      default:
        setSelectedTabIndex(0);
        break;
    }
  }, [status]);

  const handleTabChange = useCallback(
    (selectedTabIndex) => {
      setSelectedTabIndex(selectedTabIndex);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const tabs = [
    {
      id: "all",
      content: "All",
      accessibilityLabel: "All tasks",
    },
    {
      id: "completed",
      content: "Completed",
      accessibilityLabel: "Completed tasks",
    },
    {
      id: "archived",
      content: "Archived",
      accessibilityLabel: "Archived tasks",
    },
    {
      id: "canceled",
      content: "Canceled",
      accessibilityLabel: "Canceled tasks",
    },
  ];

  const rows = [
    {
      id: 1,
      changes: (
        <>
          Increase price by 10%
          <br />
          Increase compare at price by 10%
        </>
      ),
      applyTo: "Whole store",
      created: "Sep 22 at 5:22 PM",
      status: "Completed",
    },
    {
      id: 2,
      changes: (
        <>
          Increase price by 5%
          <br />
          Increase compare at price by 15%
        </>
      ),
      applyTo: "Whole sale",
      created: "Sep 23 at 5:22 PM",
      status: "Archived",
    },
    {
      id: 3,
      changes: (
        <>
          Increase price by 5%
          <br />
          Increase compare at price by 15%
        </>
      ),
      applyTo: "Whole sale",
      created: "Sep 23 at 5:22 PM",
      status: "Canceled",
    },
    // Add more rows as needed
  ];

  return (
    <>
      <Page
        title="Tasks"
        // backAction={{ url: "/" }}
        primaryAction={
          <Button onClick={() => navigate("/tasks/new")} variant="primary">
            Create Task
          </Button>
        }
      >
        <Layout>
          <Layout.Section>
            <Card>
              <Tabs
                tabs={tabs}
                selected={selectedTabIndex}
                onSelect={handleTabChange}
              >
                {selectedTabIndex === 0 && <AllTasksTable rows={rows} />}
                {selectedTabIndex === 1 && <CompletedTasksTable rows={rows} />}
                {selectedTabIndex === 2 && <ArchivedTasksTable rows={rows} />}
                {selectedTabIndex === 3 && <CanceledTasksTable rows={rows} />}
              </Tabs>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default Tasks;

export function links() {
  return [{ rel: "stylesheet", href: polarisStyles }];
}
