/** @format */

import React from 'react';

const Input = (props) => {
	return (
		<div className={props.className}>
			{props.label && (
				<label
					className="w-full leading-5 font-medium text-sm mb-3 font-normal text-gray-700 text-start"
					htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<input
				id={props.id}
				data-testid="input"
				value={props.value}
				autoComplete={props.autocomplete}
				disabled={props.disabled}
				className={`${
					props.error ? 'focus:ring-red-100 border-red-300' : ''
				} mr-5 appearance-none relative block px-4 py-2 w-full 
                 placeholder-gray-500 placeholder:text-sm border text-gray-900 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 sm:text-sm`}
				onChange={(e) => props.handleInputChange?.(e.target.value)}
				onClick={props.onFocus}
				type={props.type || "text"}
				placeholder={props.placeholder}
				aria-label={props.label}
				onBlur={props.onBlur}
			/>
			{props.error && (
				<label className="text-xs text-red-500">{props.error}</label>
			)}
		</div>
	);
};

export default Input;
