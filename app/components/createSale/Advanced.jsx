import { Checkbox, Icon, LegacyCard, TextField } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";

const Advanced = ({ advanced, setAdvanced }) => {
  const [searchProduct, setSearchProduct] = useState("");
  const { addTagsWhileSaleIsActive, tags } = advanced;

  const handleAddTagsCheckboxChange = (value) => {
    setAdvanced({ ...advanced, addTagsWhileSaleIsActive: value });
  };

  return (
    <div>
      <LegacyCard title="Advanced" sectioned>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: 'center',
            // alignItems: 'flex-start',
            gap: "15px",
          }}
        >
          <Checkbox
            label="Add tags while sale is active"
            checked={addTagsWhileSaleIsActive}
            onChange={handleAddTagsCheckboxChange}
          />

          {addTagsWhileSaleIsActive && (
            <>
              <div
                style={{
                  flex: "1",
                }}
              >
                <TextField
                  label="Tags"
                  value={searchProduct}
                  onChange={setSearchProduct}
                  placeholder="Add Tags"
                  helpText="Tags will be added when the sale is activated and removed upon completion"
                  prefix={<Icon source={SearchIcon} color="base" />}
                />
              </div>
            </>
          )}
        </div>
      </LegacyCard>
    </div>
  );
};

export default Advanced;
