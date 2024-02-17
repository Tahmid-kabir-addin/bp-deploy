import { LegacyCard, TextField, Select, Checkbox } from '@shopify/polaris'
import React, { useState } from 'react'

const PriceComponent = ({ priceFields, setPriceFields }) => {

    const {
        percent,
        amount,
        type,
        action,
        overrideCents,
        toNearestValue,
    } = priceFields;

    const typeOptions = [
        { label: 'By percent', value: 'by_percent' },
        { label: 'By amount', value: 'by_amount' },
    ];

    const actionOption = [
        { label: 'Don\'t change price', value: 'dont_change_price' },
        { label: 'Increase price', value: 'increase_price' },
        { label: 'Decrease price', value: 'decrease_price' },
        { label: 'Set new price', value: 'set_new_price' },
        { label: 'Set to compare at price', value: 'set_to_compare_at_price' },
        { label: 'Set margin', value: 'set_margin' },
    ];

    const handlePercentChange = (value) => {
        if (value >= 0 && value <= 100) {
            setPriceFields({ ...priceFields, percent: value });
        }
    };

    const handleChangeType = (value) => {
        // setType(value);
        setPriceFields({ ...priceFields, type: value })
    }

    const handleActionChange = (value) => {
        // setAction(value);
        setPriceFields({ ...priceFields, action: value })
    }

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
                        // justifyContent: 'center',
                        // alignItems: 'flex-start',
                        gap: '15px'
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
                        ['increase_price', 'decrease_price'].includes(action) && (
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
                        ['set_margin'].includes(action) && (
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
                        )
                    }
                    {
                        ['dont_change_price', 'increase_price', 'decrease_price', 'set_to_compare_at_price'].includes(action) && (
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
                                            <div style={{ display: 'flex', }}>
                                                <TextField
                                                    type="number"
                                                    prefix="0."
                                                    placeholder='0'
                                                    step={1}
                                                    max={99}
                                                    min={0}
                                                />
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

export default PriceComponent
