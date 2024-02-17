import { Button, LegacyCard } from "@shopify/polaris";
import { XIcon } from "@shopify/polaris-icons";
import React from "react";

const YearlySubscription = () => {
  return (
    <>
      <LegacyCard
        title="Save 25% with yearly subscription"
        sectioned
        actions={[
          {
            content: <Button plain icon={XIcon} />,
            onAction: () => {
              alert("close");
            },
          },
        ]}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "-35px auto -15px auto",
          }}
        >
          <p>Upgrade to an annual plan and save 25% on subscription fees.</p>
          <img
            src="/images/homepage/piggyBank.png"
            alt=""
            style={{ margin: "auto 40px" }}
          />
        </div>
        <Button size="large">Upgrade</Button>
      </LegacyCard>
    </>
  );
};

export default YearlySubscription;
