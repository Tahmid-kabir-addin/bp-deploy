import { LegacyCard, TextField } from '@shopify/polaris'
import React from 'react'

const Title = ({ title, setTitle }) => {

    const handleTitleChange = (value) => {
        setTitle(value);
    }
    
    return (
        <div>
            <LegacyCard
                title="Title"
                sectioned
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}
                >
                    <TextField
                        type='text'
                        placeholder='e.g. Summer Sale 2022'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
            </LegacyCard>
        </div>
    )
}

export default Title