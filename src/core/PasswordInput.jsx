import React, {useMemo, useState} from 'react';
import {EyeOffIcon} from '@heroicons/react/solid';
import {EyeIcon} from '@heroicons/react/outline';

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const type = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);

    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={props.className}>
            <label className="mb-1 block text-sm font-medium text-gray-700">{props.label}</label>
            <div
                className={`${
                    props.error ? 'focus:ring-red-100 border-red-300' : ''
                } relative rounded-md shadow-sm border-1 border-gray-300 w-full`}>
                <input
                    id={props.id}
                    type={type}
                    autoComplete="current-password"
                    value={props.value}
                    className={`
            w-full block relative block w-full px-3 ${
                        props.sm ? 'py-2' : 'py-3'
                    } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          `}
                    placeholder={props.placeholder}
                    onChange={(e) => props.handleInputChange?.(e.target.value)}
                />
                <div
                    onClick={toggleVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer text-gray-400 hover:scale-110">
                    {showPassword ? <EyeOffIcon className="w-6 h-6"/> : <EyeIcon className="w-6 h-6"/>}
                </div>
            </div>
            {props.error && <label className="text-xs text-red-500">{props.error}</label>}
        </div>
    );
};

export default PasswordInput;
