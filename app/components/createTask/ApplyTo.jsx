import {
  Button,
  Icon,
  LegacyCard,
  LegacyStack,
  RadioButton,
  TextField,
} from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";

const ApplyTo = ({ applyToFields, setApplyToFields }) => {
  const { applyTo } = applyToFields;
  const [searchProduct, setSearchProduct] = useState(""); // TODO: Implement search products feature
  const [searchCollections, setSearchCollections] = useState(""); // TODO: Implement search products feature

  const handleApplyToChange = (newValue) => {
    setApplyToFields({ ...applyToFields, applyTo: newValue });
    console.log(newValue);
  };

  return (
    <div>
      <LegacyCard title="Apply To" sectioned>
        <LegacyStack spacing="tight" vertical>
          <RadioButton
            label="Whole store"
            checked={applyTo === "whole_store"}
            id="applyTo_whole_store"
            name="applyTo"
            onChange={() => handleApplyToChange("whole_store")}
          />
          <RadioButton
            label="Selected collections"
            checked={applyTo === "selected_collections"}
            id="applyTo_selected_collections"
            name="applyTo"
            onChange={() => handleApplyToChange("selected_collections")}
          />
          <RadioButton
            label="Selected products"
            checked={applyTo === "selected_products"}
            id="applyTo_selected_products"
            name="applyTo"
            onChange={() => handleApplyToChange("selected_products")}
          />
          <RadioButton
            label="Products on sale"
            checked={applyTo === "product_on_sale"}
            id="applyTo_product_on_sale"
            name="applyTo"
            onChange={() => handleApplyToChange("product_on_sale")}
          />

          {applyTo === "selected_collections" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  flex: "1",
                }}
              >
                <TextField
                  value={searchCollections}
                  onChange={setSearchCollections}
                  placeholder="Search collections"
                  prefix={<Icon source={SearchIcon} color="base" />}
                />
              </div>
              <div>
                <Button>Browse</Button>
              </div>
            </div>
          )}

          {applyTo === "selected_products" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  flex: "1",
                }}
              >
                <TextField
                  value={searchProduct}
                  onChange={setSearchProduct}
                  placeholder="Search products"
                  prefix={<Icon source={SearchIcon} color="base" />}
                />
              </div>
              <div>
                <Button>Browse</Button>
              </div>
            </div>
          )}
        </LegacyStack>
      </LegacyCard>
    </div>
  );
};

export default ApplyTo;
