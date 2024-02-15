import React from 'react';

const AlimentoCantidadInput = ({ value, onChange, onKeyDown, addFood }) => {
    return (
        <div className=" tw-absolute tw-flex tw-items-center tw-w-200 tw-ms-10 tw-border tw-border-gray-300 tw-rounded-md p-2">
            <input
                type="number"
                value={value}
                onChange={onChange}
                placeholder="gramos"
                className="tw-flex-1 tw-border-none tw-outline-none tw-text-base"
                onKeyDown={(e) => { if (e.key === 'Enter') addFood() }}
            />
        </div>
    );
};
export default AlimentoCantidadInput;
