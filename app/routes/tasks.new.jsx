import { Button, Divider, Page } from "@shopify/polaris";
import React, { useState } from "react";
import ApplyTo from "../components/createTask/ApplyTo";
import CompareAtPrice from "../components/createTask/CompareAtPrice";
import CostPerItem from "../components/createTask/CostPerItem";
import Exclude from "../components/createTask/Exclude";
import PriceComponent from "../components/createTask/PriceComponent";

const CreateTask = () => {
  const [priceFields, setPriceFields] = useState({
    percent: 0,
    amount: 0,
    type: "by_percent",
    action: "increase_price",
    overrideCents: false,
    toNearestValue: false,
  });

  const [compareAtPriceFields, setCompareAtPriceFields] = useState({
    action: "dont_change_compare_at_price",
    relativeToActualPrice: false,
    percent: 0,
    amount: 0,
    type: "by_percent",
    overrideCents: false,
    toNearestValue: false,
  });

  const [costPerItemFields, setCostPerItemFields] = useState({
    action: "dont_change_cost_per_item",
    type: "by_percent",
    percent: 0,
    amount: 0,
    overrideCents: false,
    toNearestValue: false,
  });

  const [applyToFields, setApplyToFields] = useState({
    applyTo: "whole_store",
  });

  const [excludeFields, setExcludeFields] = useState({
    exclude: "nothing",
  });

  const handleSubmitClick = () => {
    // console.log(priceFields);
    // console.log(compareAtPriceFields)
    // console.log(costPerItemFields)
    alert("Call API and send the data.");
  };

  return (
    <div>
      <Page title="New Task" backAction={{ url: `/tasks` }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            margin: "auto auto 100px auto",
          }}
        >
          <PriceComponent
            priceFields={priceFields}
            setPriceFields={setPriceFields}
          />
          <CompareAtPrice
            compareAtPriceFields={compareAtPriceFields}
            setCompareAtPriceFields={setCompareAtPriceFields}
          />
          <CostPerItem
            costPerItemFields={costPerItemFields}
            setCostPerItemFields={setCostPerItemFields}
          />
          <ApplyTo
            applyToFields={applyToFields}
            setApplyToFields={setApplyToFields}
          />
          <Exclude
            excludeFields={excludeFields}
            setExcludeFields={setExcludeFields}
          />
          <Divider />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleSubmitClick}>Create</Button>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default CreateTask;
