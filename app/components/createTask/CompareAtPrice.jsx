import { LegacyCard, Select, Checkbox, TextField } from '@shopify/polaris'
import React from 'react'

const CompareAtPrice = ({ compareAtPriceFields, setCompareAtPriceFields }) => {

    const {
        action,
        relativeToActualPrice,
        percent,
        amount,
        type,
        overrideCents,
        toNearestValue
    } = compareAtPriceFields;

    const typeOptions = [
        { label: 'By percent', value: 'by_percent' },
        { label: 'By amount', value: 'by_amount' },
    ];

    const actionOption = [
        { label: 'Don\'t change compare at price', value: 'dont_change_compare_at_price' },
        { label: 'Increase compare at price', value: 'increase_compare_at_price' },
        { label: 'Decrease compare at price', value: 'decrease_compare_at_price' },
        { label: 'Set new compare at price', value: 'set_new_compare_at_price' },
        { label: 'Set to price', value: 'set_to_price' },
        { label: 'Reset compare at price', value: 'reset_compare_at_price' },
    ];

    const handleActionChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, action: value })
    }

    const handleChangeType = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, type: value })
    }

    const handleRelativeToActualPriceChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, relativeToActualPrice: value })
    }

    const handlePercentChange = (value) => {
        if (value >= 0 && value <= 100) {
            setCompareAtPriceFields({ ...compareAtPriceFields, percent: value });
        }
    }

    const handleAmountChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, amount: value })
    }

    const handleOverrideCentsChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, overrideCents: value })
    }

    const handleToNearestValueChange = (value) => {
        setCompareAtPriceFields({ ...compareAtPriceFields, toNearestValue: value });
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
                            'increase_compare_at_price',
                            'decrease_compare_at_price'
                        ].includes(action) && (
                            <>
                                <Checkbox
                                    label="Relative to actual price"
                                    checked={relativeToActualPrice}
                                    onChange={handleRelativeToActualPriceChange}
                                />

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
                        ['set_new_compare_at_price'].includes(action) && (
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
                            'dont_change_compare_at_price',
                            'increase_compare_at_price',
                            'decrease_compare_at_price',
                            'set_to_price',
                            'reset_compare_at_price'
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

export default CompareAtPrice