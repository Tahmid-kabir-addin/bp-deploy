import { Button, Divider, Page } from "@shopify/polaris";
import React, { useState } from "react";
import Advanced from "../components/createSale/Advanced";
import ApplyTo from "../components/createSale/ApplyTo";
import CompareAtPrice from "../components/createSale/CompareAtPrice";
import Exclude from "../components/createSale/Exclude";
import Price from "../components/createSale/Price";
import Schedule from "../components/createSale/Schedule";
import Title from "../components/createSale/Title";

const CreateSale = () => {
  const [title, setTitle] = useState("");
  const [priceFields, setPriceFields] = useState({
    action: "decrease_price",
    type: "by_percent",
    percent: 0,
    overrideCents: false,
    toNearestValue: false,
    cents: 99,
  });

  const [compareAtPriceFields, setCompareAtPriceFields] = useState({
    action: "set_new_compare_at_price",
    amount: 0.0,
    overrideCents: false,
    toNearestValue: false,
    cents: 99,
  });

  const [applyToFields, setApplyToFields] = useState({
    applyTo: "whole_store",
  });

  const [excludeFields, setExcludeFields] = useState({
    exclude: "nothing",
  });

  const [schedule, setSchedule] = useState({
    startDate: null,
    startTime: null,
    set_end_date: false,
    endDate: null,
    endTime: null,
  });

  const [advanced, setAdvanced] = useState({
    addTagsWhileSaleIsActive: false,
    tags: [],
  });

  const handleSubmitClick = () => {
    // console.log(priceFields);
    // console.log(compareAtPriceFields)
    // console.log(costPerItemFields)
    alert("Call API and send the data.");
  };

  return (
    <div>
      <Page title="New Sale" backAction={{ url: `/sales` }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            margin: "auto auto 100px auto",
          }}
        >
          {/* title section  */}
          <Title title={title} setTitle={setTitle} />

          {/* Price section  */}
          <Price priceFields={priceFields} setPriceFields={setPriceFields} />

          {/* Compare at price section  */}
          <CompareAtPrice
            compareAtPriceFields={compareAtPriceFields}
            setCompareAtPriceFields={setCompareAtPriceFields}
          />

          {/* Apply to sectin  */}
          <ApplyTo
            applyToFields={applyToFields}
            setApplyToFields={setApplyToFields}
          />

          {/* Exclude section  */}
          <Exclude
            excludeFields={excludeFields}
            setExcludeFields={setExcludeFields}
          />

          {/* Schedule Section  */}
          <Schedule schedule={schedule} setSchedule={setSchedule} />

          {/* Advanced section  */}
          <Advanced advanced={advanced} setAdvanced={setAdvanced} />

          <Divider />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button primary onClick={handleSubmitClick}>
              Create
            </Button>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default CreateSale;
