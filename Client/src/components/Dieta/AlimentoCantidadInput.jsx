import React from 'react';

const AlimentoCantidadInput = ({ value, onChange, addFood, closeModal, nombre }) => {
  return (
    <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-gray-800 tw-bg-opacity-75">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md tw-p-6 tw-relative">
        <button
          onClick={closeModal}
          className="tw-absolute tw-top-0 tw-right-2 tw-text-gray-500 hover:tw-text-gray-700 tw-text-2xl"
        >
          X
        </button>
        <h2 className="tw-text-xl tw-font-bold tw-mb-4">{nombre}</h2>
        <p className="tw-mb-4">Introduce la cantidad </p>
        <div className="tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded-md tw-p-2">
          <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder="gramos"
            className="tw-flex-1 tw-border-none tw-outline-none tw-text-base no-spinners"
            onKeyDown={(e) => { if (e.key === 'Enter') addFood() }}
          />
          <svg onClick={() => addFood()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] tw-cursor-pointer hover:tw-fill-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AlimentoCantidadInput;