import { LegacyCard, Select, TextField, Checkbox } from '@shopify/polaris'
import React from 'react'

const CompareAtPrice = ({ compareAtPriceFields, setCompareAtPriceFields }) => {

    const {
        action,
        amount,
        overrideCents,
        toNearestValue,
        cents,
    } = compareAtPriceFields;

    const actionOption = [
        { label: 'Set new compare at price', value: 'set_new_compare_at_price' },
        { label: 'Set to old price(discount)', value: 'set_to_old_price_discount' },
    ];

    const handleActionChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, action: value })
    }

    const handleAmountChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, amount: value })
    }

    const handleOverrideCentsChange = (value) => {
        // setOverrideCents(value);
        setCompareAtPriceFields({ ...compareAtPriceFields, overrideCents: value })
    }

    const handleToNearestValueChange = (value) => {
        // setToNearestValue(value);
        setCompareAtPriceFields({ ...compareAtPriceFields, toNearestValue: value });
    }

    const handleCentsChange = (value) => {
        // setCents(value);
        setCompareAtPriceFields({ ...compareAtPriceFields, cents: value });
    }

    return (
        <div>
            <LegacyCard
                title="Compare at price"
                sectioned
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Select
                        label='Action'
                        options={actionOption}
                        onChange={handleActionChange}
                        value={action}
                    />

                    {
                        action === 'set_new_compare_at_price' && (
                            <>
                                <TextField
                                    label="Amount"
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    suffix="USD"
                                    min={0}
                                />
                            </>
                        )
                    }

                    {
                        ['set_to_old_price_discount',].includes(action) && (
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

export default CompareAtPrice