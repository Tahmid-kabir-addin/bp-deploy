import { LegacyCard, Select, Checkbox, TextField } from '@shopify/polaris'
import React from 'react'

const CostPerItem = ({ costPerItemFields, setCostPerItemFields }) => {
    const {
        action,
        type,
        percent,
        amount,
        overrideCents,
        toNearestValue
    } = costPerItemFields

    const actionOption = [
        { label: 'Don\'t change cost per item', value: 'dont_change_cost_per_item' },
        { label: 'Increase cost per item', value: 'increase_cost_per_item' },
        { label: 'Decrease cost per item', value: 'decrease_cost_per_item' },
        { label: 'Set new cost per item', value: 'set_new_cost_per_item' },
        { label: 'Reset cost per item', value: 'reset_cost_per_item' },
    ];

    const typeOptions = [
        { label: 'By percent', value: 'by_percent' },
        { label: 'By amount', value: 'by_amount' },
    ];

    const handleActionChange = (value) => {
        setCostPerItemFields({ ...costPerItemFields, action: value })
    }

    const handleChangeType = (value) => {
        setCostPerItemFields({ ...costPerItemFields, type: value })
    }

    const handlePercentChange = (value) => {
        if (value >= 0 && value <= 100)
            setCostPerItemFields({ ...costPerItemFields, percent: value });
    }

    const handleAmountChange = (value) => {
        setCostPerItemFields({ ...costPerItemFields, amount: value })
    }

    const handleOverrideCentsChange = (value) => {
        setCostPerItemFields({ ...costPerItemFields, overrideCents: value })
    }

    const handleToNearestValueChange = (value) => {
        setCostPerItemFields({ ...costPerItemFields, toNearestValue: value })
    }

    return (
        <div>
            <LegacyCard
                title="Cost Per Item"
                sectioned
            >

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}
                >
                    <Select
                        label="Action"
                        options={actionOption}
                        onChange={handleActionChange}
                        // helpText={action === 'set_margin' ? "This action will only apply to products with a filled cost field." : undefined}
                        value={action}
                    />

                    {
                        [
                            'increase_cost_per_item',
                            'decrease_cost_per_item'
                        ].includes(action) && (
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
                        ['set_new_cost_per_item'].includes(action) && (
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
                        [
                            'dont_change_cost_per_item',
                            'increase_cost_per_item',
                            'decrease_cost_per_item',
                            'reset_cost_per_item',
                        ].includes(action) && (
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

export default CostPerItem