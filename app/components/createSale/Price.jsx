import {
  LegacyCard,
  Select,
  TextField,
  Checkbox
} from '@shopify/polaris'
import React from 'react'

const Price = ({ priceFields, setPriceFields }) => {

  const {
    percent,
    amount,
    type,
    action,
    overrideCents,
    toNearestValue,
    cents,
  } = priceFields;

  const typeOptions = [
    { label: 'By percent', value: 'by_percent' },
    { label: 'By amount', value: 'by_amount' },
  ];

  const actionOption = [
    { label: 'Decrease price', value: 'decrease_price' },
    { label: 'Set new price', value: 'set_new_price' },
  ];

  const handleActionChange = (value) => {
    // setAction(value);
    setPriceFields({ ...priceFields, action: value })
  }

  const handleChangeType = (value) => {
    // setType(value);
    setPriceFields({ ...priceFields, type: value })
  }

  const handlePercentChange = (value) => {
    if (value >= 0 && value <= 100) {
      setPriceFields({ ...priceFields, percent: value });
    }
  };

  const handleAmountChange = (value) => {
    // setAmount(value);
    setPriceFields({ ...priceFields, amount: value })
  }

  const handleOverrideCentsChange = (value) => {
    // setOverrideCents(value);
    setPriceFields({ ...priceFields, overrideCents: value })
  }

  const handleToNearestValueChange = (value) => {
    // setToNearestValue(value);
    setPriceFields({ ...priceFields, toNearestValue: value });
  }

  const handleCentsChange = (value) => {
    // setCents(value);
    setPriceFields({ ...priceFields, cents: value });
  }

  return (
    <div>
      <LegacyCard
        title="Price"
        sectioned
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Select
            label="Action"
            options={actionOption}
            onChange={handleActionChange}
            helpText={action === 'set_margin' ? "This action will only apply to products with a filled cost field." : undefined}
            value={action}
          />
          {
            action === 'decrease_price' && (
              <>
                <Select
                  label="Change type"
                  options={typeOptions}
                  onChange={handleChangeType}
                  value={type}
                />

                {
                  type === 'by_percent' ? (
                    <TextField
                      label="Percent"
                      type="number"
                      placeholder="0"
                      value={percent}
                      onChange={handlePercentChange}
                      suffix="%"
                      max={100}
                      min={0}
                    />
                  ) : (
                    <TextField
                      label="Amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={handleAmountChange}
                      suffix="USD"
                      min={0}
                    />
                  )
                }
              </>
            )
          }
          {
            ['set_new_price'].includes(action) && (
              <TextField
                label="Amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={handleAmountChange}
                suffix="USD"
                min={0}
              />
            )
          }

          {
            ['decrease_price',].includes(action) && (
              <>
                <Checkbox
                  label="Override cents"
                  checked={overrideCents}
                  onChange={handleOverrideCentsChange}
                />
                {
                  overrideCents && (
                    <>
                      <Checkbox
                        label="To nearest value"
                        checked={toNearestValue}
                        onChange={handleToNearestValueChange}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <TextField
                          type="number"
                          prefix="0."
                          value={cents}
                          onChange={handleCentsChange}
                          placeholder='0'
                          step={1}
                          max={99}
                          min={0}
                        />
                        <label>E.g. 10.25 -&gt; 10.{cents}</label>
                      </div>
                    </>
                  )
                }
              </>
            )
          }
        </div>
      </LegacyCard>
    </div>
  )
}

export default Price