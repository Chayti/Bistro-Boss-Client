import React from 'react';

const InputField = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="text-gray-700 font-semibold mb-1 block" htmlFor={name}>
                {label}<sup>*</sup>
            </label>
            <input
                className="border-2 border-gray-200 block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
