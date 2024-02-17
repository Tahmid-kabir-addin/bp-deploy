import { Button, InlineGrid, Page } from "@shopify/polaris";
import React from "react";
import NeedHelp from "../components/homepage/NeedHelp";
import Sales from "../components/homepage/Sales";
import Tasks from "../components/homepage/Tasks";
import YearlySubscription from "../components/homepage/YearlySubscription";

const Homepage = () => {
  return (
    <>
      <Page
        title="Bulk Price Editor"
        secondaryActions={
          <Button
            variant="tertiary"
            onClick={() => alert("Changelog Clicked!")}
          >
            Changelog
          </Button>
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <YearlySubscription />
          <InlineGrid gap="500" columns={2}>
            <Tasks />
            <Sales />
          </InlineGrid>
          <NeedHelp />
        </div>
      </Page>
    </>
  );
};

export default Homepage;
