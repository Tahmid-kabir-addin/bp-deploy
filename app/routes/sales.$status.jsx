import { Layout, LegacyCard, LegacyTabs, Page } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActiveSalesTable from "../components/sales/ActiveSalesTable";
import AllSalesTable from "../components/sales/AllSalesTable";
import CompletedSalesTable from "../components/sales/CompletedSalesTable";
import ScheduledSalesTable from "../components/sales/ScheduledSalesTable";

const rows = {
  sales: [
    {
      id: 1,
      title: "Bristy Sell",
      changes: (
        <>
          Decrease price by 10%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Active",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 2,
      title: "Winter Sell",
      changes: (
        <>
          Increase price by 10%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Scheduled",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 3,
      title: "Summer Sell",
      changes: (
        <>
          Decrease price by 5%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Completed",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 4,
      title: "Kochu Sell",
      changes: (
        <>
          Increase price by 20%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Completed",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
  ],
};

const Sales = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { status } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    switch (status) {
      case "active":
        setSelectedTabIndex(1);
        break;
      case "scheduled":
        setSelectedTabIndex(2);
        break;
      case "completed":
        setSelectedTabIndex(3);
        break;
      default:
        setSelectedTabIndex(0);
        break;
    }
  }, [status]);

  const handleTabChange = useCallback((selectedTabIndex) => {
    setSelectedTabIndex(selectedTabIndex);
  }, []);

  const tabs = [
    {
      id: "all",
      content: "All",
      accessibilityLabel: "All sales",
    },
    {
      id: "active",
      content: "Active",
      accessibilityLabel: "Active sales",
    },
    {
      id: "scheduled",
      content: "Scheduled",
      accessibilityLabel: "Scheduled sales",
    },
    {
      id: "completed",
      content: "Completed",
      accessibilityLabel: "Completed sales",
    },
  ];

  return (
    <div>
      <Page
        title="Sales"
        backAction={{ url: "/" }}
        primaryAction={{
          content: "Create sale",
          onAction: () => navigate("/sales/new"),
        }}
      >
        <Layout>
          <Layout.Section>
            <LegacyCard>
              <LegacyTabs
                tabs={tabs}
                selected={selectedTabIndex}
                onSelect={handleTabChange}
              >
                {selectedTabIndex === 0 && <AllSalesTable rows={rows.sales} />}
                {selectedTabIndex === 1 && (
                  <ActiveSalesTable rows={rows.sales} />
                )}
                {selectedTabIndex === 2 && (
                  <ScheduledSalesTable rows={rows.sales} />
                )}
                {selectedTabIndex === 3 && (
                  <CompletedSalesTable rows={rows.sales} />
                )}
              </LegacyTabs>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
};

export default Sales;
