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

const Exclude = ({ excludeFields, setExcludeFields }) => {
  const { exclude } = excludeFields;
  const [searchProduct, setSearchProduct] = useState(""); // TODO: Implement search products feature
  const [searchCollections, setSearchCollections] = useState(""); // TODO: Implement search products feature

  const handleExcludeChange = (newValue) => {
    setExcludeFields({ ...excludeFields, exclude: newValue });
    console.log(newValue);
  };

  return (
    <div>
      <LegacyCard title="Exclude" sectioned>
        <LegacyStack spacing="tight" vertical>
          <RadioButton
            label="nothing"
            checked={exclude === "nothing"}
            id="exclude_nothing"
            name="exclude"
            onChange={() => handleExcludeChange("nothing")}
          />
          <RadioButton
            label="Selected collections"
            checked={exclude === "selected_collections"}
            id="exclude_selected_collections"
            name="exclude"
            onChange={() => handleExcludeChange("selected_collections")}
          />
          <RadioButton
            label="Selected products"
            checked={exclude === "selected_products"}
            id="exclude_selected_products"
            name="exclude"
            onChange={() => handleExcludeChange("selected_products")}
          />
          <RadioButton
            label="Products on sale"
            checked={exclude === "product_on_sale"}
            id="exclude_product_on_sale"
            name="exclude"
            onChange={() => handleExcludeChange("product_on_sale")}
          />

          {exclude === "selected_collections" && (
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

          {exclude === "selected_products" && (
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

export default Exclude;
