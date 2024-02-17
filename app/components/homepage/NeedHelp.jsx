import { Button, ButtonGroup, LegacyCard } from "@shopify/polaris";
import React from "react";

const NeedHelp = () => {
  const handleContactSupportClick = () => {
    console.log("clicked contact support.");
  };

  const handleVewDocumentationClick = () => {
    console.log("clicked view documentation.");
  };

  return (
    <div>
      <LegacyCard title="Need help?" sectioned>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "-20px auto",
          }}
        >
          <p>
            For assistance, the support button is always available in conrner of
            your screen. You can check instant answers to common questions in
            our help center.
          </p>
          <img
            src="/images/homepage/help_icon.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>
        <ButtonGroup>
          <Button onClick={handleContactSupportClick} size="large">
            Contact support
          </Button>
          <Button variant="plain" onClick={handleVewDocumentationClick}>
            View documentation
          </Button>
        </ButtonGroup>
      </LegacyCard>
    </div>
  );
};

export default NeedHelp;
